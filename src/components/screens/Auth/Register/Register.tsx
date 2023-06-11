import React from 'react'
import styles from './Register.module.scss'
import { Link } from 'react-router-dom'
import logo from '@assets/images/auth/logoBlack.png'
import Agreement from '../agreement/Agreement'
import RegisterForm from './registerForm/RegisterForm'
import RegisterHeader from './registerHeader/RegisterHeader'

export default function Register() {
	return (
		<div className={styles.wrapper}>
			<RegisterHeader></RegisterHeader>
			<RegisterForm></RegisterForm>
			<Agreement></Agreement>
		</div>
	)
}
