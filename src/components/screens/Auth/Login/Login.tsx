import React from 'react'
import styles from './Login.module.scss'
import LoginForm from './loginForm/LoginForm'
import LoginHeader from './loginHeader/LoginHeader'
import Networks from '../networks/Networks'
import Agreement from '../agreement/Agreement'

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
