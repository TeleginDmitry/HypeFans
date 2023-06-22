import { SwiperProps, Swiper } from 'swiper/react'
import 'swiper/css/pagination'
import React from 'react'
import 'swiper/css'

interface ISlider {
  children: React.ReactNode
  swiperProps?: SwiperProps
}

const Slider = ({ swiperProps, children }: ISlider) => {
  return <Swiper {...swiperProps}>{children}</Swiper>
}

export default Slider
