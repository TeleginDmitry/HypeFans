import { IPostComment } from 'shared/interfaces/post.interface'
import { Fragment } from 'react'

import styles from './PostCommentItemReply.module.scss'
import PostCommentItem from '../PostCommentItem'

interface IPostCommentItemReply {
  reply: IPostComment[]
}

const PostCommentItemReply = ({ reply }: IPostCommentItemReply) => {
  if (!reply.length) return null

  return (
    <div className={styles.wrapper}>
      {reply.map((comment) => {
        return (
          <Fragment key={comment.id}>
            <PostCommentItem
              comment={comment}
              key={comment.id}
              isReply={true}
            ></PostCommentItem>
          </Fragment>
        )
      })}
    </div>
  )
}

export default PostCommentItemReply
