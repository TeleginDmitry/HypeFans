import React from 'react'
import styles from './FlexibleImages.module.scss'
import { classNames as cn } from 'utils/classNames/classNames'

interface IImage {
	id: number | string
	media: string
}

interface IFlexibleImages {
	images: IImage[]
	alt?: string
	handlerClickImage?(id: string | number): void
}

const FlexibleImages = ({
	images,
	alt,
	handlerClickImage,
}: IFlexibleImages) => {
	const classNameImage = !!handlerClickImage
		? cn([styles.image, styles.image__click])
		: styles.image

	if (!images.length) return null

	return (
		<div className={styles.container}>
			{images.map(image => {
				return (
					<img
						key={image.id}
						className={classNameImage}
						src={image.media}
						onClick={() => handlerClickImage(image.id)}
						alt={alt}
						loading={'lazy'}
					></img>
				)
			})}
		</div>
	)
}

export default FlexibleImages
