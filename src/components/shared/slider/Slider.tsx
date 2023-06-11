import React from 'react'
import { Swiper, SwiperProps } from 'swiper/react'
import 'swiper/css'
import "swiper/css/pagination";

interface ISlider {
	children: React.ReactNode
	swiperProps?: SwiperProps
}

const Slider = ({ children, swiperProps }: ISlider) => {
	
	return <Swiper {...swiperProps}>{children}</Swiper>
}

export default Slider
