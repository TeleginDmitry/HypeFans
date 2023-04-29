import React, { useRef, useEffect } from 'react'
import styles from './StoryList.module.scss'
import { StoryItem } from '../storyItem/StoryItem'
import useInfinityQuery from 'hooks/useInfinityQuery'
import { IPagination } from 'shared/interfaces/pagination.interface'
import { IStory } from 'shared/interfaces/story.interface'
import { StoryService } from 'services/story/Story.service'
import Modal, { IColors } from 'components/ui/modal/Modal'
import StoryModal from '../storyModal/StoryModal'
import Slider from 'components/shared/slider/Slider'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { STORY_PARAM } from 'configs/index.config'

export default function StoryList() {
	const navigation = useNavigate()

	const [searchParams, setSearchParams] = useSearchParams()
	const story_id = searchParams.get(STORY_PARAM)

	const observer = useRef(null)

	const { data: storyList, refetch } = useInfinityQuery<IStory>({
		observer,
		queryKey: 'stories',
		queryFunc: async (params): Promise<IPagination<IStory[]>> => {
			const response = await StoryService.getStories(params)
			return response.data
		},
	})

	// const {} = useInfiniteQuery()

	function handlerClickStory(story_id: number) {
		navigation(`?${STORY_PARAM}=${story_id}`)
	}

	function handlerClose() {
		searchParams.delete(STORY_PARAM)
		setSearchParams(searchParams)
	}

	return (
		<>
			<Slider<IStory>
				SwiperSlideProps={{ className: styles.slider }}
				SwiperProps={{
					slidesPerView: 'auto',
					spaceBetween: 10,
				}}
				dataList={storyList}
			>
				{(story, index) => {
					return (
						<StoryItem
							onClick={() => handlerClickStory(story.id)}
							user={story.user}
						
						></StoryItem>
					)
				}}
			</Slider>

			{/* <Swiper slidesPerView='auto' spaceBetween={10}>
				{isAuth && (
					<SwiperSlide slot='wrapper-start' className={styles.slider}>
						<StoryItem user={user} isMyStory={true}></StoryItem>
					</SwiperSlide>
				)}
				{storyList?.map((story, index) => {
					return (
						<SwiperSlide
							onClick={() => handlerStory(index)}
							className={styles.slider}
							key={story.id}
						>
							<StoryItem user={story.user}></StoryItem>
						</SwiperSlide>
					)
				})}
				<div ref={observer} slot='wrapper-end'></div>
			</Swiper> */}
			{!!story_id && (
				<Modal handlerClose={handlerClose} color={IColors.gray}>
					<StoryModal
					// initialIndexStory={initialIndexStory}
					// storyList={storyList}
					></StoryModal>
				</Modal>
			)}
		</>
	)
}
