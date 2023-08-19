import { useSearchParams } from 'react-router-dom'
import { STORY_PARAM } from 'configs/index.config'
import Modal from 'components/ui/modal/Modal'

import styles from './StoryModal.module.scss'
import StoryList from './storyList/StoryList'

const StoryModal = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const storyId = searchParams.get(STORY_PARAM)

  function handlerClose() {
    searchParams.delete(STORY_PARAM)
    setSearchParams(searchParams)
  }

  if (!storyId) return null

  return (
    <Modal handlerClose={handlerClose}>
      <StoryList handlerClose={handlerClose} story_id={+storyId}></StoryList>
    </Modal>
  )
}

export default StoryModal
