import { IPostMediaShort } from 'shared/interfaces/post.interface'
import Media from 'components/shared/media/Media'

import styles from './PostMedias.module.scss'

interface IPostMedias {
  medias: IPostMediaShort[]
}

const PostMedias = ({ medias }: IPostMedias) => {
  if (!medias.length) return null

  return (
    <ul className={styles.list}>
      {medias.map(({ media, type, id }) => {
        return (
          <Media
            imageProps={{ className: styles.media }}
            videoProps={{ className: styles.media }}
            src={media}
            type={type}
            key={id}
          ></Media>
        )
      })}
    </ul>
  )
}

export default PostMedias
