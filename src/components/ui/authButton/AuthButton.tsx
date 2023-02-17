import React from 'react'
import styles from './AuthButton.module.scss'

interface IButton {
    children: string
}


export default function AuthButton({children}: IButton) {
  return (
    <button className={styles.button}>{children}</button>
  )
}
