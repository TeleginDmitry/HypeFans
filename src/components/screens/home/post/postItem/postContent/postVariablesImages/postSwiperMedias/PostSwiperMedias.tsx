import { IPostMediaShort } from 'shared/interfaces/post.interface'
import Slider from 'components/shared/slider/Slider'
import Media from 'components/shared/media/Media'
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
        slidesPerView: 'auto',
        modules: [Pagination],
        spaceBetween: 10
      }}
    >
      {medias.map(({ media, type, id }) => {
        return (
          <SwiperSlide className={styles.slide} key={id}>
            <Media
              imageProps={{ className: styles.media }}
              videoProps={{ className: styles.media }}
              src={media}
              type={type}
            ></Media>
          </SwiperSlide>
        )
      })}
    </Slider>
  )
}

export default PostSwiperMedias
