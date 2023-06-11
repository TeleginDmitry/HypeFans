import React, { useState } from 'react'
import styles from './CreationChoose.module.scss'
import { classNames as cn } from '@utils/classNames/classNames'
import CreationModalFormStories from '../creationModalFormStories/CreationModalFormStories'

const CreationChoose = () => {
	const [isActiveStories, setActiveStories] = useState(false)

	return (
		<div className={styles.wrapper}>
			<button
				onClick={() => {
					setActiveStories(false)
				}}
				className={
					!isActiveStories
						? cn([styles.button, styles.button__active])
						: styles.button
				}
			>
				Новый пост
			</button>
			<button
				onClick={() => {
					setActiveStories(true)
				}}
				className={
					isActiveStories
						? cn([styles.button, styles.button__active])
						: styles.button
				}
			>
				Новая история
			</button>

			{/* {countActiveButton === 2 && (
				<CreationModalFormStories></CreationModalFormStories>
			)} */}
		</div>
	)
}

export default CreationChoose
