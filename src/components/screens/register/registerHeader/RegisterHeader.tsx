import { LOGIN_PAGE } from 'configs/index.config'
import { Link } from 'react-router-dom'
import React from 'react'

import styles from './RegisterHeader.module.scss'

const RegisterHeader = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Регистрация</h1>
      <span className={styles.subtitle}>
        Уже есть аккаунт?
        <Link className={styles.link} to={`/${LOGIN_PAGE}`}>
          Войдите
        </Link>
      </span>
    </div>
  )
}

export default RegisterHeader
