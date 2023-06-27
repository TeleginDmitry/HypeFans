import { IconProps, Comment } from 'icons-hypefans-lib'

import styles from './CommentAction.module.scss'

interface ICommentAction extends IconProps {
  comments: number | string
}

const CommentAction = (props: ICommentAction) => {
  const { size = 'medium', strokeWidth, comments, onClick } = props

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <Comment strokeWidth={strokeWidth} size={size}></Comment>
      <span className={styles.count}>{comments}</span>
    </div>
  )
}

export default CommentAction
