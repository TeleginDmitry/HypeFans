import { ReactComponent as Back } from '@assets/images/newPost/arrow-left.svg'
import { useNavigate } from 'react-router-dom'
import React from 'react'

import styles from './CreationHeader.module.scss'

const CreationHeader = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.header}>
      <Back
        onClick={() => {
          navigate(-1)
        }}
        className={styles.back}
      ></Back>

      <div className={styles.title__container}>
        <h2 className={styles.title}>Создать</h2>
      </div>
    </div>
  )
}

export default CreationHeader
