import React from 'react'
import uniqid from 'uniqid'

export interface IViewMedia {
	id: string
	linkView: string
	uploadFile: string | File
}

const viewMedia = (
	files: File[],
	setInputValue: React.Dispatch<React.SetStateAction<IViewMedia[]>>
) => {
 
	if (Array.isArray(files)) {
		files.forEach(file => {
			const reader = new FileReader()

			reader.onload = () => {
				const result = {
					id: uniqid(),
					linkView: reader.result.toString(),
					uploadFile: file,
				}
				setInputValue(state => [...state, result])
			}

			reader.readAsDataURL(file)
		})
	}
}

export default viewMedia
