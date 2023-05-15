import React, { useCallback, useEffect, useState } from 'react'
import styles from './StoryModal.module.scss'
import { IStory, IModalStory } from 'shared/interfaces/story.interface'
import Slider from 'components/shared/slider/Slider'
import StoryModalItem from './storyModalItem/StoryModalItem'
import { useSearchParams } from 'react-router-dom'
import { STORY_PARAM } from 'configs/index.config'
import useFetching from 'hooks/useFetching'
import { StoryService } from 'services/story/Story.service'

interface IStoryModal {}

const StoryModal = ({}: IStoryModal) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const storyId = searchParams.get(STORY_PARAM)

	const [initialIndexStory, setInitialIndexStory] = useState<number>()

	const {
		data: storyList,
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

	return (
		<div className={styles.wrapper}>
			<Slider<IStory>
				SwiperSlideProps={{ className: styles.slider }}
				SwiperProps={{
					className: styles.swiper,
					initialSlide: initialIndexStory,
				}}
				dataList={storyList}
			>
				{story => {
					return <StoryModalItem story={story}></StoryModalItem>
				}}
			</Slider>
		</div>
	)
}

export default React.memo(StoryModal)
