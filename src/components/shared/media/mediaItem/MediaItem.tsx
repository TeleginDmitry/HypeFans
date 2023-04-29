import React from 'react'
import styles from './MediaItem.module.scss'
import { ReactComponent as Circle } from '@assets/images/newPost/x-circle.svg'

import { motion } from 'framer-motion'
import { IViewMedia } from 'utils/viewMedia/ViewMedia'

interface IMediaItem {
	media: IViewMedia
	deleteMedia: (id: string) => void
}

export default function MediaItem({ media, deleteMedia }: IMediaItem) {
	return (
		<motion.li
			key={media.id}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			layout
			transition={{ duration: 0.5 }}
			className={styles.media__item}
		>
			<motion.img
				className={styles.media}
				src={media.linkView}
				alt='HypeFans'
			/>
			<Circle
				onClick={() => deleteMedia(media.id)}
				className={styles.media__delete}
			></Circle>
		</motion.li>
	)
}
