import { ReactComponent as CommentSvg } from '@assets/images/post/comments.svg'
import { actionsStyles } from 'utils/actionsStyles/ActionsStyles'
import React from 'react'

import { IActionsVariablesSize } from '../actionsVariables.interface'
import styles from './Comment.module.scss'

interface IComment extends IActionsVariablesSize {
  comments: number | string
  onClick: () => void
}

const Comment = (props: IComment) => {
  const { size = 'medium', comments, onClick } = props

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <CommentSvg
        style={actionsStyles({ size })}
        className={styles.comment}
      ></CommentSvg>
      <span className={styles.count}>{comments}</span>
    </div>
  )
}

export default Comment
