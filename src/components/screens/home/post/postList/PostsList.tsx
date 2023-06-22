import { POST_LIST_KEY, POSTS_LIMIT } from 'configs/index.config'
import ErrorText from 'components/ui/errorText/ErrorText'
import { PostService } from 'services/post/Post.service'
import { IPost } from 'shared/interfaces/post.interface'
import { useInView } from 'react-intersection-observer'
import PostsLoader from '@ui/postsLoader/PostsLoader'
import usePagination from 'hooks/usePagination'
import { useEffect } from 'react'
import { Fragment } from 'react'

import styles from './PostsList.module.scss'
import PostItem from '../postItem/PostItem'

interface IPostsList {
  user_id?: number | string
}

export default function PostsList({ user_id }: IPostsList) {
  const {
    data: postsList,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError
  } = usePagination<IPost>({
    queryFn: async ({ pageParam = 0 }) => {
      const params = {
        limit: POSTS_LIMIT,
        offset: pageParam,
        user_id
      }
      const response = await PostService.getPosts(params)
      return response.data
    },
    queryKey: POST_LIST_KEY
  })

  const { inView, ref } = useInView({
    rootMargin: '0px 0px 200px 0px',
    skip: !hasNextPage
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  if (isError)
    return <ErrorText>При загрузке постов, произошла ошибка!</ErrorText>

  return (
    <div className={styles.posts__list}>
      {postsList.map(({ results }, index) => (
        <Fragment key={index}>
          {results.map((post) => {
            return <PostItem key={post.id} post={post}></PostItem>
          })}
        </Fragment>
      ))}
      <div className={styles.posts__observer} ref={ref}></div>
      {isLoading && <PostsLoader />}

      {!isLoading && !postsList.length && (
        <h2 className={styles.title__exist}>
          У пользователя не существует ни одного поста!
        </h2>
      )}
    </div>
  )
}
