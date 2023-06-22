import Image from 'components/ui/image/Image'
import cn from '@utils/classNames/classNames'
import React from 'react'

import styles from './FlexibleImages.module.scss'

interface IImage {
  id: number | string
  media: string
}

interface IFlexibleImages {
  handlerClickImage?(id: string | number): void
  images: IImage[]
  alt?: string
}

const FlexibleImages = ({
  handlerClickImage,
  images,
  alt
}: IFlexibleImages) => {
  const classNameImage = cn(
    [styles.image],
    [!!handlerClickImage, styles.image__click]
  )

  if (!images.length) return null

  return (
    <div className={styles.container}>
      {images.map((image) => {
        return (
          <Image
            onClick={() => handlerClickImage(image.id)}
            className={classNameImage}
            src={image.media}
            key={image.id}
            alt={alt}
          ></Image>
        )
      })}
    </div>
  )
}

export default FlexibleImages
