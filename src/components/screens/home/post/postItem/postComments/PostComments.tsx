import { IPostComment } from 'shared/interfaces/post.interface'
import { PostService } from 'services/post/Post.service'
import { COMMENTS_KEY } from 'configs/index.config'
import Loader from 'components/ui/loader/Loader'
import usePagination from 'hooks/usePagination'
import React from 'react'

import PostCommentItem from './postCommentItem/PostCommentItem'
import PostCommentList from './postCommentList/PostCommentList'
import styles from './PostComments.module.scss'

interface IPostComments {
  lastComment: IPostComment | null
  countComments: number
  post_id: number
}

const PostComments = ({
  countComments,
  lastComment,
  post_id
}: IPostComments) => {
  const {
    data: paginatedComments,
    fetchNextPage,
    hasNextPage,
    isFetching
  } = usePagination<IPostComment>({
    queryFn: async ({ pageParam = 0 }) => {
      const params = {
        post_id
      }

      if (pageParam) {
        params['cursor'] = pageParam
      }

      const response = await PostService.getComments(params)
      return response.data
    },
    queryKey: [COMMENTS_KEY, post_id],
    refetchOnWindowFocus: true,
    cacheTime: Infinity,
    nameParam: 'cursor',
    enabled: false
  })

  function showNextPage() {
    fetchNextPage()
  }

  const isHasNextPage =
    hasNextPage ||
    (!!lastComment && countComments > paginatedComments.length * 2 + 1)

  if (!lastComment && !paginatedComments.length) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.comments}>
          <PostCommentList
            paginatedComments={paginatedComments}
          ></PostCommentList>

          {lastComment && !paginatedComments.length && (
            <PostCommentItem comment={lastComment}></PostCommentItem>
          )}
        </div>
        {isFetching && <Loader></Loader>}

        {isHasNextPage && (
          <button className={styles.show__comments} onClick={showNextPage}>
            Показать следующие комментарии
          </button>
        )}
      </div>
    </div>
  )
}

export default React.memo(PostComments)
