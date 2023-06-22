import { IResponseViewMedia } from 'hooks/useViewUploadMedias'
import { motion } from 'framer-motion'

import MediaItem from '../mediaItem/MediaItem'
import styles from './MediasList.module.scss'

interface IMediasList {
  deleteMedia: (id: number) => void
  medias: IResponseViewMedia[]
}

export default function MediasList({ deleteMedia, medias }: IMediasList) {
  return (
    <motion.ul className={styles.medias__container}>
      {medias.map((media) => {
        return (
          <MediaItem
            deleteMedia={deleteMedia}
            key={media.id}
            media={media}
          ></MediaItem>
        )
      })}
    </motion.ul>
  )
}
