import React from 'react'
import styles from './StoryList.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { stories } from './data'
import { StoryItem } from '../storyItem/StoryItem'
import 'swiper/css'

export default function StoryList() {
	const breakpoints = {
		// 425: {
		// 	slidesPerView: 2,
		// },
		// 600: {
		// 	slidesPerView: 5,
		// },
		// 700: {
		// 	slidesPerView: 7,
		// },
	}
	return (
		<Swiper slidesPerView='auto' spaceBetween={10}>
   
			{/* <SwiperSlide slot='wrapper-start' className={styles.slider}>
				
			</SwiperSlide> */}
			{stories.map(story => {
				return (
					<SwiperSlide className={styles.slider} key={story.id}>
						<StoryItem {...story}></StoryItem>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}
