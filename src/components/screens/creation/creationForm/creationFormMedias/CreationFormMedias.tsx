import { IResponseViewMedia } from 'hooks/useViewUploadMedias'
import Media from 'components/shared/media/Media'
import { CirclePlus } from 'icons-hypefans-lib'

import styles from './CreationFormMedias.module.scss'

interface ICreationFormMedias {
  setMedias: React.Dispatch<React.SetStateAction<IResponseViewMedia[]>>
  medias: IResponseViewMedia[]
}

const CreationFormMedias = ({ setMedias, medias }: ICreationFormMedias) => {
  if (!medias.length) return null

  function deleteMedia(id: number) {
    setMedias((state) => state.filter((media) => media.id !== id))
  }

  return (
    <div className={styles.wrapper}>
      {medias.map(({ view, type, id }) => {
        return (
          <Media
            motionProps={{
              transition: { duration: 0.5 },
              animate: { opacity: 1 },
              initial: { opacity: 0 },
              exit: { opacity: 0 },
              layout: true
            }}
            mediaProps={{
              media: view,
              type: type
            }}
            classWrapper={styles.mediaItem}
            key={id}
          >
            <CirclePlus
              onClick={() => deleteMedia(id)}
              className={styles.delete}
            ></CirclePlus>
          </Media>
        )
      })}
    </div>
  )
}

export default CreationFormMedias
