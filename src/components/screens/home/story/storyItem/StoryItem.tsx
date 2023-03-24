import React from 'react'
import { IStory } from '../../../../../shared/interfaces/story.interface'
import styles from './StoryItem.module.scss'
import 'swiper/css'
import { classNames as cn } from '@utils/classNames/classNames'
import { motion } from 'framer-motion'

export function StoryItem({ user, date_joined, isMyStory }: IStory) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			viewport={{ once: true }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
			className={styles.story}
		>
			<div
				className={
					isMyStory
						? cn([styles.avatar__container, styles.avatar__myStory])
						: styles.avatar__container
				}
			>
				<img draggable={false}  className={styles.avatar} src={user.avatar} alt='HypeFans' />
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
