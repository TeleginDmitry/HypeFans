import React from 'react'

import LoginHeader from './loginHeader/LoginHeader'
import Agreement from '../agreement/Agreement'
import LoginForm from './loginForm/LoginForm'
import Networks from '../networks/Networks'
import styles from './Login.module.scss'

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <LoginHeader></LoginHeader>
      <LoginForm></LoginForm>
      <Networks></Networks>
      <Agreement></Agreement>
    </div>
  )
}
