import { ComponentWithAuthorized } from 'hocs/ComponentWithAuthorized'
import ComponentWithEqualUser from 'hocs/ComponentWithEqualUser'
import { IShortUser } from 'shared/interfaces/user.interface'

import DeleteAction from './deleteAction/DeleteAction'
import styles from './PostCommentActions.module.scss'
import EditAction from './editAction/EditAction'
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
      <ComponentWithAuthorized>
        <ComponentWithEqualUser user={user.id}>
          <DeleteAction comment={comment} post_id={post_id}></DeleteAction>
        </ComponentWithEqualUser>
      </ComponentWithAuthorized>

      <ComponentWithAuthorized>
        <ComponentWithEqualUser user={user.id}>
          <EditAction comment={comment} post_id={post_id}></EditAction>
        </ComponentWithEqualUser>
      </ComponentWithAuthorized>

      <LikeAction
        comment={comment}
        isLiked={isLiked}
        likes={likes}
      ></LikeAction>
    </div>
  )
}

export default PostCommentActions
