import { IPagination } from 'shared/interfaces/pagination.interface'
import { IPostComment } from 'shared/interfaces/post.interface'
import { Fragment } from 'react'

import PostCommentItem from '../postCommentItem/PostCommentItem'
import styles from './PostCommentList.module.scss'

interface IPostCommentList {
  paginatedComments: IPagination<IPostComment[]>[]
}

const PostCommentList = ({ paginatedComments }: IPostCommentList) => {
  if (!paginatedComments.length) return null
  return (
    <div className={styles.wrapper}>
      <div className={styles.comments}>
        {paginatedComments.map(({ results }, index) => {
          return (
            <Fragment key={index}>
              {results.map((comment) => {
                return (
                  <PostCommentItem
                    comment={comment}
                    key={comment.id}
                  ></PostCommentItem>
                )
              })}
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default PostCommentList
