import React from 'react'
import styles from './Button.module.scss'

interface IButton {
    children: string
}


export default function Button({children}: IButton) {
  return (
    <button className={styles.button}>{children}</button>
  )
}
