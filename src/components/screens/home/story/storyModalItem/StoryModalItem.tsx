import React, { useEffect, useState } from 'react'
import styles from './StoryModalItem.module.scss'
import { IModalStory } from 'shared/interfaces/story.interface'
import StoryUser from '../storyUser/StoryUser'
import StoryForm from '../storyForm/StoryForm'
import { useNavigate } from 'react-router-dom'
import { STORY_PARAM } from 'configs/index.config'
import { useSwiperSlide } from 'swiper/react'

interface IStoryModalItem {
	storyItem: IModalStory
}

const StoryModalItem = ({ storyItem }: IStoryModalItem) => {
	const story = storyItem.story

	const navigation = useNavigate()
	const swiperSlide = useSwiperSlide()

	function switchSlider(story_id: number) {
		navigation(`/?${STORY_PARAM}=${story_id}`, { preventScrollReset: true })
	}

	useEffect(() => {
		if (swiperSlide.isActive) {
			switchSlider(story.id)
		}
	}, [swiperSlide.isActive])

	return (
		<div className={styles.wrapper}>
			{story.medias.map(itemMedia => {
				return <img className={styles.image} src={itemMedia.media} alt='' />
			})}

			<div className={styles.container}>
				<StoryUser
					user={story.user}
					date_create={story.date_joined}
				></StoryUser>
				<StoryForm></StoryForm>
			</div>
		</div>
	)
}

export default StoryModalItem
