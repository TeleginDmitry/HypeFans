import { ReactComponent as Circle } from '@assets/images/newPost/x-circle.svg'
import { IResponseViewMedia } from 'hooks/useViewUploadMedias'
import { motion } from 'framer-motion'
import React from 'react'

import styles from './MediaItem.module.scss'

interface IMediaItem {
  deleteMedia: (id: number) => void
  media: IResponseViewMedia
}

export default function MediaItem({ deleteMedia, media }: IMediaItem) {
  return (
    <motion.li
      className={styles.media__item}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      key={media.id}
      layout
    >
      <motion.img className={styles.media} src={media.view} alt='HypeFans' />
      <Circle
        onClick={() => deleteMedia(media.id)}
        className={styles.media__delete}
      ></Circle>
    </motion.li>
  )
}
