import React, { useState } from 'react'
import generateId from 'utils/generateId/GenerateId'

interface IViewMedia {
	isInfinity?: boolean
}

export interface IResponseViewMedia {
	id: number
	view: string
	upload: File
}

const useViewUploadMedias = ({ isInfinity = false }: IViewMedia = {}) => {
	const [medias, setMedias] = useState<IResponseViewMedia[]>([])

	const handlerMedia = (mediasList: FileList) => {
		const arrayMedias = [...mediasList]
		arrayMedias.forEach((file, index) => {
			const reader = new FileReader()
			reader.onload = () => {
				const result = {
					id: generateId(index),
					view: reader.result.toString(),
					upload: file,
				}
				setMedias(state => (isInfinity ? [...state, result] : [result]))
			}
			reader.readAsDataURL(file)
		})
	}

	return [medias, setMedias, handlerMedia] as const
}

export default useViewUploadMedias
