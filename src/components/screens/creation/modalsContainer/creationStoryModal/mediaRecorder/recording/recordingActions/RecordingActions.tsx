import UploadMedia from 'components/shared/actions/uploadMedia/UploadMedia'
import RecordButton from 'components/shared/recordButton/RecordButton'
import Camera from 'components/shared/actions/camera/Camera'
import UploadFile from '@ui/uploadFile/UploadFile'
import React from 'react'

import styles from './RecordingActions.module.scss'

interface IRecordingActions {
  onUploadFile: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClickRecord: React.MouseEventHandler<HTMLButtonElement>
  onChangeCamera: () => void
  condition: boolean
}

const RecordingActions = ({
  onChangeCamera,
  onClickRecord,
  onUploadFile,
  condition
}: IRecordingActions) => {
  return (
    <div className={styles.actions}>
      <UploadFile accept='image/*,video/*' onChange={onUploadFile}>
        <UploadMedia></UploadMedia>
      </UploadFile>
      <RecordButton
        onClick={onClickRecord}
        condition={condition}
      ></RecordButton>
      <Camera onClick={onChangeCamera}></Camera>
    </div>
  )
}

export default RecordingActions
