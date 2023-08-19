import { ICommentMedia } from 'shared/interfaces/post.interface'
import { Navigation, Pagination, Zoom } from 'swiper'
import Slider from 'components/shared/slider/Slider'
import { MEDIA_PARAM } from 'configs/index.config'
import { useSearchParams } from 'react-router-dom'
import Media from 'components/shared/media/Media'
import { SwiperSlide } from 'swiper/react'
import React, { useMemo } from 'react'

import styles from './MediasList.module.scss'

interface IMediasList {
  medias: ICommentMedia[]
}

const MediasList = ({ medias }: IMediasList) => {
  const [searchParams, setSearchParams] = useSearchParams()

  function changeMediaParam(media: number) {
    searchParams.set(MEDIA_PARAM, media.toString())
    setSearchParams(searchParams)
  }

  const initialIndex = useMemo(() => {
    const media = searchParams.get(MEDIA_PARAM)
    const index = medias.findIndex((item) => item.id === +media)

    return index
  }, [medias.length])

  return (
    <div className={styles.wrapper}>
      <Slider
        swiperProps={{
          pagination: {
            clickable: true
          },
          modules: [Zoom, Navigation, Pagination],
          initialSlide: initialIndex,
          className: styles.swiper,
          spaceBetween: 20,
          navigation: true,
          autoHeight: true,
          zoom: true
        }}
      >
        {medias.map(({ media, type, id }) => {
          return (
            <SwiperSlide key={id}>
              {({ isActive }) => {
                if (isActive) {
                  console.log(isActive)
                  // changeMediaParam(id)
                }

                return <Media type={type} src={media} key={id}></Media>
              }}
            </SwiperSlide>
          )
        })}
      </Slider>
    </div>
  )
}

export default MediasList
