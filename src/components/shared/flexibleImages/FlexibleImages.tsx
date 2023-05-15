import React, { useEffect, useState } from 'react'
import styles from './FlexibleImages.module.scss'

interface IImage {
	id: number | string
	media: string
}

interface IFlexibleImages {
	images: IImage[]
	alt?: string
}

const FlexibleImages = ({ images, alt }: IFlexibleImages) => {
	return (
		<div className={styles.container}>
			{images.map(image => {
				return (
					<img
						key={image.id}
						className={styles.image}
						src={image.media}
						alt={alt}
					></img>
				)
			})}
		</div>
	)
}

export default FlexibleImages
