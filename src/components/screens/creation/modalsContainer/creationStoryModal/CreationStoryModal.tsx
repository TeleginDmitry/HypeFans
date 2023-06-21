import Modal from 'components/ui/modal/Modal'
import styles from './CreationStoryModal.module.scss'
import MediaRecorder from './mediaRecorder/MediaRecorder'

const CreationStoryModal = () => {
	return (
		<Modal opacity={1} handlerClose={null}>
			<div className={styles.wrapper}>
				<MediaRecorder></MediaRecorder>
			</div>
		</Modal>
	)
}

export default CreationStoryModal
