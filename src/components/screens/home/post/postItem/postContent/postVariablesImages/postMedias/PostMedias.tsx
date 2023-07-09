import { IPostMediaShort } from 'shared/interfaces/post.interface'
import Media from 'components/shared/media/Media'

import styles from './PostMedias.module.scss'

interface IPostMedias {
  medias: IPostMediaShort[]
}

const PostMedias = ({ medias }: IPostMedias) => {
  if (!medias.length) return null

  return (
    <div className={styles.container}>
      {medias.map(({ media, type, id }) => {
        return (
          <Media
            mediaProps={{
              className: styles.media,
              media,
              type
            }}
            key={id}
          ></Media>
        )
      })}
    </div>
  )
}

export default PostMedias
