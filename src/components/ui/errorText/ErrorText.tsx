import React from 'react'

import styles from './ErrorText.module.scss'

interface IErrorText {
  children: string
}

const ErrorText = ({ children }: IErrorText) => {
  return <h2 className={styles.error}>{children}</h2>
}

export default ErrorText
