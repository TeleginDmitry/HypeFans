import React from 'react'
import styles from './FlexibleImages.module.scss'
import cn from '@utils/classNames/classNames'
import Image from 'components/ui/image/Image'

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
	const classNameImage = cn(
		[styles.image],
		[!!handlerClickImage, styles.image__click]
	)

	if (!images.length) return null

	return (
		<div className={styles.container}>
			{images.map(image => {
				return (
					<Image
						key={image.id}
						className={classNameImage}
						src={image.media}
						onClick={() => handlerClickImage(image.id)}
						alt={alt}
					></Image>
				)
			})}
		</div>
	)
}

export default FlexibleImages
