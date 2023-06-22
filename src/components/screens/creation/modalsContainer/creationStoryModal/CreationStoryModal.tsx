import Modal from 'components/ui/modal/Modal'

import MediaRecorder from './mediaRecorder/MediaRecorder'
import styles from './CreationStoryModal.module.scss'

const CreationStoryModal = () => {
  return (
    <Modal handlerClose={null} opacity={1}>
      <div className={styles.wrapper}>
        <MediaRecorder></MediaRecorder>
      </div>
    </Modal>
  )
}

export default CreationStoryModal
