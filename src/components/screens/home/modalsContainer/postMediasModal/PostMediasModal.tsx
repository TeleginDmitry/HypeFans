import { POST_MEDIAS_KEY, MEDIAS_PARAM, POST_PARAM } from 'configs/index.config'
import ShortUserInfo from 'components/shared/shortUserInfo/ShortUserInfo'
import { IPostUser } from 'shared/interfaces/post.interface'
import React, { useEffect, useState, memo } from 'react'
import { PostService } from 'services/post/Post.service'
import Slider from 'components/shared/slider/Slider'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Modal from 'components/ui/modal/Modal'
import { SwiperSlide } from 'swiper/react'

import styles from './PostMediasModal.module.scss'

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
    queryFn: async () => {
      const params = {
        post_id
      }

      const response = await PostService.getMedias(params)

      return response.data
    },
    enabled: !!post_id && !!media_id,
    queryKey: POST_MEDIAS_KEY
  })

  useEffect(() => {
    if (postMedias.length) {
      setInitialIndex(
        postMedias.findIndex((item) => item.id.toString() === media_id)
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
              wrapperClass: styles.swiper__container,
              initialSlide: initialIndex,
              className: styles.swiper,
              spaceBetween: 10,

              slidesPerView: 1
            }}
          >
            {postMedias.map(({ media, user, id }) => {
              return (
                <SwiperSlide className={styles.slide} key={id}>
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
              username={userMedia?.username}
              prefix={userMedia?.prefix}
              avatar={userMedia?.avatar}
            ></ShortUserInfo>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default memo(PostMediasModal)
