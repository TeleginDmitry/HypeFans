import cn from '@utils/classNames/classNames'
import React, { useState } from 'react'

import styles from './ProfileDescription.module.scss'

interface IProfileDescription {
  description: string
}

const ProfileDescription = ({ description }: IProfileDescription) => {
  const [isFullDescription, setIsFullDescription] = useState(false)

  return (
    <>
      {description && (
        <div className={styles.description__container}>
          <p
            className={cn(
              [styles.description],
              [isFullDescription, styles.description__active]
            )}
          >
            {description}
          </p>
          {description?.length > 80 && (
            <span
              onClick={() => setIsFullDescription((state) => !state)}
              className={styles.description__span}
            >
              {isFullDescription ? 'Скрыть' : 'Читать больше'}
            </span>
          )}
        </div>
      )}
    </>
  )
}

export default ProfileDescription
