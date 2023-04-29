import styles from './MediasList.module.scss'
import MediaItem from '../mediaItem/MediaItem'
import { IViewMedia } from 'utils/viewMedia/ViewMedia'
import { motion } from 'framer-motion'

interface IMediasList {
	medias: IViewMedia[]
	deleteMedia: (id: string) => void
}

export default function MediasList({ medias, deleteMedia }: IMediasList) {
	return (
		<motion.ul className={styles.medias__container}>
			{medias.map(media => {
				return <MediaItem media={media} deleteMedia={deleteMedia}></MediaItem>
			})}
		</motion.ul>
	)
}
