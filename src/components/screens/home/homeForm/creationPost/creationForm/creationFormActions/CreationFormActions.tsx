import UploadFile from 'components/ui/uploadFile/UploadFile'
import { Photo, Video, Send } from 'icons-hypefans-lib'

import styles from './CreationFormActions.module.scss'

interface ICreationFormActions {
  handlerMedia: (mediasList: FileList) => void
  mediasLength: number
  inputValue: string
}

const CreationFormActions = ({
  mediasLength,
  handlerMedia,
  inputValue
}: ICreationFormActions) => {
  function onSelectMedia(event: React.ChangeEvent<HTMLInputElement>) {
    const medias = event.target.files
    handlerMedia(medias)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <UploadFile onChange={onSelectMedia} accept='image/*' multiple={true}>
          <Photo></Photo>
        </UploadFile>
        <UploadFile onChange={onSelectMedia} accept='video/*' multiple={true}>
          <Video></Video>
        </UploadFile>
      </div>

      {(!!inputValue.length || !!mediasLength) && (
        <button type='submit'>
          <Send></Send>
        </button>
      )}
    </div>
  )
}

export default CreationFormActions
