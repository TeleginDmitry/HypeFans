import React from 'react'
import { ReactComponent as CommentSvg } from '@assets/images/post/comments.svg'
import styles from './Comment.module.scss'

interface IComment {
	comments: number | string
	onClick: () => void
}

const Comment = (props: IComment) => {
	const { comments, onClick } = props

	return (
		<div onClick={onClick} className={styles.wrapper}>
			<CommentSvg className={styles.comment}></CommentSvg>
			<span className={styles.count}>{comments}</span>
		</div>
	)
}

export default Comment
