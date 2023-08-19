import { IResponseViewMedia } from 'hooks/useViewUploadMedias'
import { mediaMotion } from 'shared/motions/media.motions'
import { CirclePlus } from 'icons-hypefans-lib'

import styles from './MediasAnimatedList.module.scss'
import Media from '../media/Media'

interface IMediasAnimatedList {
  deleteMedia(id: number): void
  medias: IResponseViewMedia[]
  isCanToDelete: boolean
}

const MediasAnimatedList = ({
  isCanToDelete,
  deleteMedia,
  medias
}: IMediasAnimatedList) => {
  if (!medias.length) return null

  return (
    <ul className={styles.list}>
      {medias.map(({ view, type, id }) => {
        return (
          <li className={styles.item} key={id}>
            <Media
              imageProps={{ className: styles.media, ...mediaMotion }}
              videoProps={{ className: styles.media, ...mediaMotion }}
              type={type}
              src={view}
            ></Media>

            {isCanToDelete && (
              <CirclePlus
                onClick={() => deleteMedia?.(id)}
                className={styles.delete}
                title='Удалить'
              ></CirclePlus>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default MediasAnimatedList
