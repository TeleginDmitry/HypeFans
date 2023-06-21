import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { CREATE_PARAM, CREATE_STORY_VALUE } from 'configs/index.config'
import CreationStoryModal from './creationStoryModal/CreationStoryModal'

const ModalsContainer = () => {
	const [URLSearchParams, setURLSearchParams] = useSearchParams()

	const createParam = URLSearchParams.get(CREATE_PARAM)

	if (createParam === CREATE_STORY_VALUE)
		return <CreationStoryModal></CreationStoryModal>

	return null
}

export default ModalsContainer
