import React from 'react'
import styles from './PostActions.module.scss'

interface IPostActions {
	post_id: number
}

const PostActions = ({ post_id }: IPostActions) => {
	return (
		<ul className={styles.actions}>
			<li
				onClick={() => {
					const link = window.location.origin + `/?post=${post_id}`
					var tempElem = document.createElement('input')
					tempElem.setAttribute('value', link)
					document.body.appendChild(tempElem)

					tempElem.select()

					document.execCommand('copy')
					document.body.removeChild(tempElem)
				}}
				className={styles.action}
			>
				Копировать ссылку
			</li>
			<li className={styles.action}>Спрятать из ленты</li>
			<li className={styles.action}>Пожаловаться</li>
		</ul>
	)
}

export default PostActions
