import React, { useState } from 'react'
import OtherEntrance from '../OtherEntrance/OtherEntrance'
import styles from './Registr.module.scss'
import stylesAuth from '../Auth.module.scss'
import { Link } from 'react-router-dom'
import Input from '@ui/input/Input'
import AuthButton from '@ui/authButton/AuthButton'

export default function Registr() {
	const [isNextInput, setIsNextInput] = useState(false)

	return (
		<div className={stylesAuth.wrapper}>
			<div className={stylesAuth.titles}>
				<h1 className={stylesAuth.title}>Регистрация</h1>
				<p className={stylesAuth.question}>
					Уже есть аккаунт?{' '}
					<Link to='/login' className={stylesAuth.question__style}>
						Войдите
					</Link>
				</p>
			</div>
			<form className={stylesAuth.form} action=''>
				{isNextInput ? (
					<div className={stylesAuth.form__item}>
						<p className={stylesAuth.form__text}>Пароль</p>
						<Input type='password' placeholder='Введите свой пароль...'></Input>
            
						<div className={stylesAuth.button__conteiner}>
							<AuthButton>Войти</AuthButton>
						</div>
					</div>
				) : (
					<div className={stylesAuth.form__item}>
						<p className={stylesAuth.form__text}>Email</p>
						<Input type='email' placeholder='Введите свой email...'></Input>

						<p className={stylesAuth.form__text}>Пароль</p>
						<Input type='password' placeholder='Введите свой пароль...'></Input>
						<p className={stylesAuth.form__text}>Имя</p>
						<Input type='username' placeholder='Введите своё имя...'></Input>

						<div className={stylesAuth.button__conteiner}>
							<AuthButton>Продолжить</AuthButton>
						</div>
					</div>
				)}
			</form>
			<OtherEntrance />
		</div>
	)
}
