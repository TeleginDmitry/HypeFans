import React from 'react'
import Camera from 'components/shared/actions/camera/Camera'
import UploadMedia from 'components/shared/actions/uploadMedia/UploadMedia'
import RecordButton from 'components/shared/recordButton/RecordButton'
import styles from './RecordingActions.module.scss'
import UploadFile from 'components/ui/uploadFile/UploadFile'

interface IRecordingActions {
	onUploadFile: (event: React.ChangeEvent<HTMLInputElement>) => void
	onClickRecord: React.MouseEventHandler<HTMLButtonElement>
	onChangeCamera: () => void
	condition: boolean
}

const RecordingActions = ({
	onUploadFile,
	condition,
	onClickRecord,
	onChangeCamera,
}: IRecordingActions) => {
	return (
		<div className={styles.actions}>
			<UploadFile onChange={onUploadFile} accept='image/*,video/*'>
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
