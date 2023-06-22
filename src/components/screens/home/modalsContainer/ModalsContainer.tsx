import { MEDIAS_PARAM, STORY_PARAM, POST_PARAM } from 'configs/index.config'
import { useSearchParams } from 'react-router-dom'

import StoryModal from './storyModal/StoryModal'
import PostModal from './postModal/PostModal'

const ModalsContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const post_id = searchParams.get(POST_PARAM)
  const hasPostParam = searchParams.has(POST_PARAM)

  const hasPostMediasParam = searchParams.has(MEDIAS_PARAM)

  const hasStoryParam = searchParams.has(STORY_PARAM)

  // function handlerClosePostMedias() {
  // 	let index = 0
  // 	searchParams.forEach((value, key) => {
  // 		if (key === MEDIAS_PARAM && index === 0) {
  // 			searchParams.delete(MEDIAS_PARAM)
  // 			searchParams.delete(POST_PARAM)
  // 			setSearchParams(searchParams)
  // 		} else {
  // 			searchParams.delete(MEDIAS_PARAM)
  // 			setSearchParams(searchParams)
  // 		}
  // 		index += 1
  // 	})
  // }

  // if (hasPostMediasParam && hasPostParam)
  // 	return (
  // 		<PostMediasModal handlerClose={handlerClosePostMedias}></PostMediasModal>
  // 	)

  if (hasPostParam) return <PostModal></PostModal>
  if (hasStoryParam) return <StoryModal></StoryModal>

  return null
}

export default ModalsContainer
