import { IPostComment } from 'shared/interfaces/post.interface'

import PostCommentItem from '../postCommentItem/PostCommentItem'
import styles from './PostCommentList.module.scss'

interface IPostCommentList {
  commentsList: IPostComment[]
}

const PostCommentList = ({ commentsList }: IPostCommentList) => {
  if (!commentsList.length) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.comments}>
        {commentsList.map((comment) => {
          return (
            <PostCommentItem
              comment={comment}
              key={comment.id}
            ></PostCommentItem>
          )
        })}
      </div>
    </div>
  )
}

export default PostCommentList
