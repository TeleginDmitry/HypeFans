import { IPostMediaShort } from 'shared/interfaces/post.interface'
import Slider from 'components/shared/slider/Slider'
import Image from 'components/ui/image/Image'
import { SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import styles from './PostSwiperMedias.module.scss'

interface IPostSwiperMedias {
  medias: IPostMediaShort[]
}

const PostSwiperMedias = ({ medias }: IPostSwiperMedias) => {
  if (!medias.length) return null

  return (
    <Slider
      swiperProps={{
        pagination: {
          dynamicBullets: true
        },
        wrapperClass: styles.swiper__container,
        className: styles.swiper,
        modules: [Pagination],
        spaceBetween: 10,
        slidesPerView: 1
      }}
    >
      {medias.map(({ media, id }) => {
        return (
          <SwiperSlide className={styles.slide} key={id}>
            <div className={styles.media__container}>
              <Image className={styles.media} src={media}></Image>
            </div>
          </SwiperSlide>
        )
      })}
    </Slider>
  )
}

export default PostSwiperMedias
