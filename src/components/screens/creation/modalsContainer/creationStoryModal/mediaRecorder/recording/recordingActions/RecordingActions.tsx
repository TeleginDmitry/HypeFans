import RecordButton from 'components/shared/recordButton/RecordButton'
import { CameraRotate, Photo } from 'icons-hypefans-lib'
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
        <Photo></Photo>
      </UploadFile>
      <RecordButton
        onClick={onClickRecord}
        condition={condition}
      ></RecordButton>
      <CameraRotate onClick={onChangeCamera}></CameraRotate>
    </div>
  )
}

export default RecordingActions
