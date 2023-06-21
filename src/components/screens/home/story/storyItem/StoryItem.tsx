import React from 'react'
import { IStory } from 'shared/interfaces/story.interface'
import styles from './StoryItem.module.scss'
import 'swiper/css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { STORY_PARAM } from 'configs/index.config'
import Image from 'components/ui/image/Image'

interface IStoryItem {
	story: IStory
}

export const StoryItem = ({ story }: IStoryItem) => {
	const { date_joined, id, user } = story

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
			<div className={styles.avatar__container}>
				<Image className={styles.avatar} src={user.avatar} />
			</div>
			<span className={styles.prefix}>{user.prefix}</span>
		</motion.div>
	)
}
