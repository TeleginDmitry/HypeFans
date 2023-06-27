import { ArrowLeft } from 'icons-hypefans-lib'
import { useNavigate } from 'react-router-dom'
import React from 'react'

import styles from './CreationHeader.module.scss'

const CreationHeader = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.header}>
      <ArrowLeft
        onClick={() => {
          navigate(-1)
        }}
        className={styles.back}
      ></ArrowLeft>

      <div className={styles.title__container}>
        <h2 className={styles.title}>Создать</h2>
      </div>
    </div>
  )
}

export default CreationHeader
