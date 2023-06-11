import React from 'react'
import styles from './RegisterHeader.module.scss'
import { Link } from 'react-router-dom'
import { LOGIN_PAGE } from 'configs/index.config'

const RegisterHeader = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Регистрация</h1>
			<span className={styles.subtitle}>
				Уже есть аккаунт?
				<Link to={`/${LOGIN_PAGE}`} className={styles.link}>
					Войдите
				</Link>
			</span>
		</div>
	)
}

export default RegisterHeader
