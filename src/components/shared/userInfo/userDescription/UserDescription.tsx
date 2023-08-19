import cn from '@utils/classNames/classNames'
import React, { useState } from 'react'

import styles from './UserDescription.module.scss'

interface IUserDescription {
  description: string
}

const UserDescription = ({ description }: IUserDescription) => {
  const [isFullDescription, setIsFullDescription] = useState(false)

  if (!description) return null

  return (
    <div className={styles.wrapper}>
      <p
        className={cn(
          [styles.description],
          [isFullDescription, styles.description__active]
        )}
      >
        {description}
      </p>
      {description.length > 80 && (
        <span
          onClick={() => setIsFullDescription((state) => !state)}
          className={styles.description__span}
        >
          {isFullDescription ? 'Скрыть' : 'Читать больше'}
        </span>
      )}
    </div>
  )
}

export default UserDescription
