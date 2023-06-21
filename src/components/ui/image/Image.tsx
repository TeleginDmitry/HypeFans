import React from 'react'
import { useInView } from 'react-intersection-observer'

interface IImage
	extends React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	> {
	src: string
}

const Image = ({ src, ...imageProps }: IImage) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	})

	return <img {...imageProps} ref={ref} src={inView && src} />
}

export default Image
