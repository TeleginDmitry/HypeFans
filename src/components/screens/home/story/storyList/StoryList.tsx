import React, { useEffect } from 'react'
import styles from './StoryList.module.scss'
import { SwiperSlide } from 'swiper/react'
import { StoryItem } from '../storyItem/StoryItem'
import { IStory } from 'shared/interfaces/story.interface'
import { StoryService } from 'services/story/Story.service'
import Slider from 'components/shared/slider/Slider'
import { STORIES_LIMIT, STORY_LIST_KEY } from 'configs/index.config'
import usePagination from 'hooks/usePagination'
import { useInView } from 'react-intersection-observer'
import { useTypedSelector } from 'hooks/useTypedSelector'
import MyStory from './myStory/MyStory'

export default function StoryList() {
	const isAuth = useTypedSelector(state => state.auth.isAuth)

	const {
		data: paginatedStories,
		isLoading,
		fetchNextPage,
		hasNextPage,
		isFetching,
	} = usePagination<IStory>({
		queryKey: STORY_LIST_KEY,
		queryFn: async ({ pageParam = 0 }) => {
			const params = {
				limit: STORIES_LIMIT,
				offset: pageParam,
			}
			const response = await StoryService.getStories(params)
			return response.data
		},
	})

	const { ref, inView } = useInView({
		skip: !hasNextPage,
		rootMargin: '0px 60px 0px 0px',
	})

	useEffect(() => {
		if (inView) {
			fetchNextPage()
		}
	}, [inView])

	return (
		<div onClick={() => fetchNextPage()} className={styles.wrapper}>
			<Slider swiperProps={{ slidesPerView: 'auto', spaceBetween: 10 }}>
				{isAuth && (
					<div slot='wrapper-start' className={styles.my_story}>
						<MyStory></MyStory>
					</div>
				)}
				{paginatedStories.map(({ results }) => {
					return results.map(story => {
						return (
							<SwiperSlide className={styles.slide}>
								<StoryItem key={story.id} story={story}></StoryItem>
							</SwiperSlide>
						)
					})
				})}

				<div ref={ref} slot='wrapper-end' className={styles.observer}></div>
			</Slider>
		</div>
	)
}
