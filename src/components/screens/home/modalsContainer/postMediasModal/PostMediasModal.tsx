import React, { useEffect, memo, useState } from 'react'
import styles from './PostMediasModal.module.scss'
import Modal from 'components/ui/modal/Modal'
import { useSearchParams } from 'react-router-dom'
import { MEDIAS_PARAM, POST_MEDIAS_KEY, POST_PARAM } from 'configs/index.config'
import useFetching from 'hooks/useFetching'
import { IPostMedia, IPostUser } from 'shared/interfaces/post.interface'
import { PostService } from 'services/post/Post.service'
import Slider from 'components/shared/slider/Slider'
import PostMediasItem from './postMediasItem/PostMediasItem'
import { SwiperSlide } from 'swiper/react'
import { useQuery } from '@tanstack/react-query'
import ShortUserInfo from 'components/shared/shortUserInfo/ShortUserInfo'
import { IShortUser } from 'shared/interfaces/user.interface'

interface IPostMediasModal {
	handlerClose: () => void
}

const PostMediasModal = ({ handlerClose }: IPostMediasModal) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const post_id = searchParams.get(POST_PARAM)
	const media_id = searchParams.get(MEDIAS_PARAM)

	const [userMedia, setUserMedia] = useState<Partial<IPostUser>>({})
	const [initialIndex, setInitialIndex] = useState<number>(undefined)

	const { data: postMedias = [] } = useQuery({
		queryKey: POST_MEDIAS_KEY,
		queryFn: async () => {
			const params = {
				post_id,
			}

			const response = await PostService.getMedias(params)

			return response.data
		},
		enabled: !!post_id && !!media_id,
	})

	useEffect(() => {
		if (postMedias.length) {
			setInitialIndex(
				postMedias.findIndex(item => item.id.toString() === media_id)
			)
		}
	}, [postMedias])

	if (!postMedias.length && initialIndex !== -1) return null

	return (
		<Modal handlerClose={handlerClose}>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<Slider
						swiperProps={{
							slidesPerView: 1,
							initialSlide: initialIndex,
							spaceBetween: 10,
							wrapperClass: styles.swiper__container,

							className: styles.swiper,
						}}
					>
						{postMedias.map(({ media, id, user }) => {
							return (
								<SwiperSlide key={id} className={styles.slide}>
									{({ isActive }) => {
										if (isActive) {
											setUserMedia(user)
										}

										return (
											<div className={styles.media__container}>
												<img className={styles.media} src={media} />
											</div>
										)
									}}
								</SwiperSlide>
							)
						})}
					</Slider>

					<div className={styles.content}>
						<ShortUserInfo
							avatar={userMedia?.avatar}
							username={userMedia?.username}
							prefix={userMedia?.prefix}
						></ShortUserInfo>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default memo(PostMediasModal)
