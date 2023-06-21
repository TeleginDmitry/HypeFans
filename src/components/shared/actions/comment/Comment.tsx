import React from 'react'
import { ReactComponent as CommentSvg } from '@assets/images/post/comments.svg'
import styles from './Comment.module.scss'
import { IActionsVariablesSize } from '../actionsVariables.interface'
import { actionsStyles } from 'utils/actionsStyles/ActionsStyles'

interface IComment extends IActionsVariablesSize {
	comments: number | string
	onClick: () => void
}

const Comment = (props: IComment) => {
	const { comments, onClick, size = 'medium' } = props

	return (
		<div onClick={onClick} className={styles.wrapper}>
			<CommentSvg style={actionsStyles({ size })} className={styles.comment}></CommentSvg>
			<span className={styles.count}>{comments}</span>
		</div>
	)
}

export default Comment
