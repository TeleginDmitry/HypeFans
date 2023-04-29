import React from 'react'
import { IStory } from '../../../../../shared/interfaces/story.interface'
import styles from './StoryItem.module.scss'
import 'swiper/css'
import { classNames as cn } from '@utils/classNames/classNames'
import { motion } from 'framer-motion'
import { API_URL } from 'configs/api.config'

interface IStoryItemProps {
	user: {
		id: number
		prefix: string
		avatar: string
	}
	isMyStory?: boolean
	onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const StoryItem = ({
	user,
	isMyStory = false,
	onClick,
}: IStoryItemProps) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className={styles.story}
			onClick={onClick}
		>
			<div
				className={
					isMyStory
						? cn([styles.avatar__container, styles.avatar__myStory])
						: styles.avatar__container
				}
			>
				<img
					draggable={false}
					className={styles.avatar}
					src={isMyStory ? API_URL + user.avatar : user.avatar}
					alt='HypeFans'
				/>
			</div>
			<div className={styles.prefix__container}>
				{isMyStory ? (
					<span className={styles.prefix__myStory}>Твоя истоия</span>
				) : (
					<span className={styles.prefix}>{user.prefix}</span>
				)}
			</div>
		</motion.div>
	)
}
