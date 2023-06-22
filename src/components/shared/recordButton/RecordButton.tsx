import cn from '@utils/classNames/classNames'
import React from 'react'

import styles from './RecordButton.module.scss'

interface IRecordButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  condition: boolean
}

const RecordButton = ({ condition, onClick }: IRecordButton) => {
  return (
    <button
      className={cn([styles.button], [condition, styles.button__active])}
      onClick={onClick}
    ></button>
  )
}

export default RecordButton
