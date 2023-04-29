import React from 'react'
import styles from './Slider.module.scss'
import {
	Swiper,
	SwiperSlide,
	SwiperProps,
	SwiperSlideProps,
} from 'swiper/react'
import 'swiper/css'

interface IDataWithId {
	id: string | number
}

type SlideData = {
	isActive: boolean
	isPrev: boolean
	isNext: boolean
	isVisible: boolean
}


interface ISlider<D extends IDataWithId> {
	SwiperProps?: SwiperProps
	SwiperSlideProps?: SwiperSlideProps
	dataList: D[]
	children: (item: D, index: number, props: SlideData) => React.ReactNode
}

const Slider = <D extends IDataWithId>({
	SwiperProps,
	SwiperSlideProps,
	dataList = [],
	children,
}: ISlider<D>) => {
	return (
		<Swiper {...SwiperProps}>
			{dataList.map((item, index) => {
				return (
					<SwiperSlide {...SwiperSlideProps} key={item.id}>
						{props => children(item, index, props)}
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default Slider
