import styles from './MediasList.module.scss'
import MediaItem from '../mediaItem/MediaItem'
import { motion } from 'framer-motion'
import { IResponseViewMedia } from 'hooks/useViewUploadMedias'

interface IMediasList {
	medias: IResponseViewMedia[]
	deleteMedia: (id: number) => void
}

export default function MediasList({ medias, deleteMedia }: IMediasList) {
	return (
		<motion.ul className={styles.medias__container}>
			{medias.map(media => {
				return <MediaItem key={media.id} media={media} deleteMedia={deleteMedia}></MediaItem>
			})}
		</motion.ul>
	)
}
