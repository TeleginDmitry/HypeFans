import { IShortUser } from 'shared/interfaces/user.interface'

import DeleteAction from './deleteAction/DeleteAction'
import styles from './PostCommentActions.module.scss'
import LikeAction from './likeAction/LikeAction'

interface IPostCommentActions {
  isLiked: boolean
  user: IShortUser
  post_id: number
  comment: number
  likes: number
}

const PostCommentActions = (props: IPostCommentActions) => {
  const { isLiked, post_id, comment, likes, user } = props

  function onClickActions(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation()
  }

  return (
    <div className={styles.actions} onClick={onClickActions}>
      <DeleteAction
        comment={comment}
        post_id={post_id}
        user_id={user.id}
      ></DeleteAction>
      <LikeAction
        comment={comment}
        isLiked={isLiked}
        likes={likes}
      ></LikeAction>
    </div>
  )
}

export default PostCommentActions
