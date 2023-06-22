import React from 'react'

import styles from './Video.module.scss'

interface IVideo
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  classVideo?: string
  src: string
}

const Video = (props: IVideo) => {
  const { classVideo, src, ...videoProps } = props

  if (!src) return null

  const completeClass = styles.video + ' ' + classVideo

  return (
    <video className={completeClass} autoPlay loop {...videoProps}>
      <source type='video/webm' src={src} />
    </video>
  )
}

export default Video
