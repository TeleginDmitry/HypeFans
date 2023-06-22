import React from 'react'

import RegisterHeader from './registerHeader/RegisterHeader'
import RegisterForm from './registerForm/RegisterForm'
import Agreement from '../agreement/Agreement'
import styles from './Register.module.scss'

export default function Register() {
  return (
    <div className={styles.wrapper}>
      <RegisterHeader></RegisterHeader>
      <RegisterForm></RegisterForm>
      <Agreement></Agreement>
    </div>
  )
}
