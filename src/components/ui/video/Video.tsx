import React from 'react'
import styles from './Video.module.scss'

interface IVideo
	extends React.DetailedHTMLProps<
		React.VideoHTMLAttributes<HTMLVideoElement>,
		HTMLVideoElement
	> {
	src: string
	classVideo?: string
}

const Video = (props: IVideo) => {
	const { src, classVideo, ...videoProps } = props

	if (!src) return null

	const completeClass = styles.video + ' ' + classVideo

	return (
		<video className={completeClass} autoPlay loop {...videoProps}>
			<source src={src} type='video/webm' />
		</video>
	)
}

export default Video
