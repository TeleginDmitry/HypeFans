import { CREATE_STORY_VALUE, CREATE_PARAM } from 'configs/index.config'
import { useSearchParams } from 'react-router-dom'
import React from 'react'

import CreationStoryModal from './creationStoryModal/CreationStoryModal'

const ModalsContainer = () => {
  const [URLSearchParams, setURLSearchParams] = useSearchParams()

  const createParam = URLSearchParams.get(CREATE_PARAM)

  if (createParam === CREATE_STORY_VALUE)
    return <CreationStoryModal></CreationStoryModal>

  return null
}

export default ModalsContainer
