import React from 'react'
import { IPostMediaShort } from 'shared/interfaces/post.interface'
import { SwiperSlide } from 'swiper/react'
import Slider from 'components/shared/slider/Slider'
import styles from './PostSwiperMedias.module.scss'
import { Pagination } from 'swiper'

interface IPostSwiperMedias {
	medias: IPostMediaShort[]
}

const PostSwiperMedias = ({ medias }: IPostSwiperMedias) => {
	if (!medias.length) return null

	return (
		<Slider
			swiperProps={{
				slidesPerView: 1,
				spaceBetween: 10,
				wrapperClass: styles.swiper__container,
				className: styles.swiper,
				modules: [Pagination],
				pagination: {
					dynamicBullets: true,
				},
			}}
		>
			{medias.map(({ media, id }) => {
				return (
					<SwiperSlide key={id} className={styles.slide}>
						<div className={styles.media__container}>
							<img className={styles.media} src={media} loading={'lazy'} />
						</div>
					</SwiperSlide>
				)
			})}
		</Slider>
	)
}

export default PostSwiperMedias
