import cn from '@utils/classNames/classNames'
import React from 'react'

import styles from './Points.module.scss'

interface IPoints {
  onClick?: React.MouseEventHandler<HTMLDivElement>
  className?: string
}

const Points = ({ className, onClick }: IPoints) => {
  return (
    <div className={cn([styles.wrapper, className])} onClick={onClick}>
      <div className={styles.point}></div>
      <div className={styles.point}></div>
      <div className={styles.point}></div>
    </div>
  )
}

export default Points
