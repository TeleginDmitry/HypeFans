import SelectEmojis from 'components/shared/selectEmojis/SelectEmojis'
import UploadFile from 'components/ui/uploadFile/UploadFile'
import { Photo, Smile, Video } from 'icons-hypefans-lib'
import { useState } from 'react'

import styles from './PostCommentFormActions.module.scss'

interface IPostCommentFormActions {
  onClickEmoji(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void
  handlerMedia: (mediasList: FileList) => void
}

const PostCommentFormActions = ({
  onClickEmoji,
  handlerMedia
}: IPostCommentFormActions) => {
  const [isActiveEmojis, setActiveEmojis] = useState(false)

  function changeActiveEmojis() {
    setActiveEmojis((state) => !state)
  }

  function onSelectMedia(event: React.ChangeEvent<HTMLInputElement>) {
    const medias = event.target.files
    handlerMedia(medias)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.actions}>
        <UploadFile onChange={onSelectMedia} accept='image/*' multiple={true}>
          <Photo></Photo>
        </UploadFile>
        <UploadFile onChange={onSelectMedia} accept='video/*' multiple={true}>
          <Video></Video>
        </UploadFile>
        <Smile onClick={changeActiveEmojis} className={styles.emoji}></Smile>
      </div>
      {isActiveEmojis && (
        <div className={styles.emojis}>
          <SelectEmojis onClickEmoji={onClickEmoji}></SelectEmojis>
        </div>
      )}
    </div>
  )
}

export default PostCommentFormActions
