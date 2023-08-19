import { REGISTER_PAGE } from 'configs/index.config'
import { Link } from 'react-router-dom'
import React from 'react'

import styles from './LoginHeader.module.scss'

const LoginHeader = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Вход</h1>
      <span className={styles.subtitle}>
        Нет аккаунта?
        <Link to={`/${REGISTER_PAGE}`} className={styles.link}>
          Создайте
        </Link>
      </span>
    </div>
  )
}

export default LoginHeader
