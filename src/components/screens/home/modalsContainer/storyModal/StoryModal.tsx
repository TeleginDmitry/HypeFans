import React, { useEffect, useState } from 'react'
import styles from './StoryModal.module.scss'
import { IStory } from 'shared/interfaces/story.interface'
import Slider from 'components/shared/slider/Slider'
import StoryModalItem from './storyModalItem/StoryModalItem'
import useFetching from 'hooks/useFetching'
import { StoryService } from 'services/story/Story.service'
import Modal from 'components/ui/modal/Modal'
import { useSearchParams } from 'react-router-dom'
import { STORY_PARAM } from 'configs/index.config'
import { SwiperSlide } from 'swiper/react'

interface IStoryModal {}

const StoryModal = ({}: IStoryModal) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const storyId = searchParams.get(STORY_PARAM)

	const [initialIndexStory, setInitialIndexStory] = useState<number>()

	const {
		data: storyList = [],
		fetchQuery,
		isLoading,
	} = useFetching<IStory[]>({
		callback: async () => {
			const response = await StoryService.getStories()
			return response.data.results
		},
	})

	useEffect(() => {
		if (storyId) {
			fetchQuery()
		}
	}, [storyId])

	function handlerClose() {
		searchParams.delete(STORY_PARAM)
		setSearchParams(searchParams)
	}

	if (storyList.length) return null

	return (
		<Modal handlerClose={handlerClose}>
			<div className={styles.wrapper}>
				<Slider>
					{storyList.map(story => {
						return (
							<SwiperSlide key={story.id} className={styles.slide}>
								<StoryModalItem story={story}></StoryModalItem>
							</SwiperSlide>
						)
					})}
				</Slider>
			</div>
		</Modal>
	)
}

export default StoryModal
