import { useInView } from 'react-intersection-observer'
import React from 'react'

import styles from './Video.module.scss'

interface IVideo
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  src: string
}

const Video = (props: IVideo) => {
  const { src, ...videoProps } = props

  const { inView, ref } = useInView({
    rootMargin: '0px 0px 200px 0px',
    triggerOnce: true
  })

  if (!src) return null

  return (
    <video {...videoProps} src={inView ? src : ''} ref={ref}>
      <source type='video/webm' src={src} />
    </video>
  )
}

export default Video
