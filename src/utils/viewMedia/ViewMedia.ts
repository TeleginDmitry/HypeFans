import React from 'react'

export interface IViewMedia {
	linkView: string
	uploadFile: string | File
}

const viewMedia = (
	file: File | undefined,
	setInputValue: React.Dispatch<React.SetStateAction<IViewMedia>>
) => {
	if (file) {
		const reader = new FileReader()
		reader.onload = () => {
			const result = {
				linkView: reader.result.toString(),
				uploadFile: file,
			}
			setInputValue(result)
		}
		reader.readAsDataURL(file)
	}
}

export default viewMedia
