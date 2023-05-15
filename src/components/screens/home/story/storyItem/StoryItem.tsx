import React from 'react'
import { IStory } from 'shared/interfaces/story.interface'
import styles from './StoryItem.module.scss'
import 'swiper/css'
import { classNames as cn } from '@utils/classNames/classNames'
import { motion } from 'framer-motion'
import { API_URL } from 'configs/api.config'
import { useNavigate } from 'react-router-dom'
import { STORY_PARAM } from 'configs/index.config'

interface IStoryItem {
	story: IStory
}

export const StoryItem = ({ story }: IStoryItem) => {
	const { date_joined, id, is_my_story, user } = story

	const navigation = useNavigate()

	function handlerClickStory(story_id: number) {
		navigation(`/?${STORY_PARAM}=${story_id}`)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className={styles.story}
			onClick={() => handlerClickStory(id)}
		>
			<div
				className={
					is_my_story
						? cn([styles.avatar__container, styles.avatar__myStory])
						: styles.avatar__container
				}
			>
				<img
					draggable={false}
					className={styles.avatar}
					src={is_my_story ? API_URL + user.avatar : user.avatar}
					alt='HypeFans'
				/>
			</div>
			<div className={styles.prefix__container}>
				{is_my_story ? (
					<span className={styles.prefix__myStory}>Твоя истоия</span>
				) : (
					<span className={styles.prefix}>{user.prefix}</span>
				)}
			</div>
		</motion.div>
	)
}
