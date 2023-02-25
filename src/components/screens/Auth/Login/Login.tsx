import React, { useState } from 'react'
import styles from './Login.module.scss'
import stylesAuth from '../Auth.module.scss'
import OtherEntrance from '../OtherEntrance/OtherEntrance'
import Input from '@ui/input/Input'
import { Link } from 'react-router-dom'
import AuthButton from '@ui/authButton/AuthButton'
import logo from '@assets/images/auth/logoBlack.png'

export default function Login() {
	
	const [isNextInput, setIsNextInput] = useState(false)

	return (
		<div className={stylesAuth.wrapper}>
			<div className={stylesAuth.titles}>
				<h1 className={stylesAuth.title}>Вход</h1>
				<p className={stylesAuth.question}>
					Нет аккаунта?{' '}
					<Link to='/registr' className={stylesAuth.question__style}>
						Создайте
					</Link>
				</p>
			</div>
			<form className={stylesAuth.form} action=''>
				<div className={stylesAuth.form__wrapper}>
					{isNextInput ? (
						<div className={stylesAuth.form__item}>
							<div className={stylesAuth.form__input_content}>
								<p className={stylesAuth.form__text}>Пароль</p>
								<Input
									type='password'
									placeholder='Введите свой пароль...'
								></Input>
							</div>

							<div className={stylesAuth.button__conteiner}>
								<AuthButton>Войти</AuthButton>
							</div>
						</div>
					) : (
						<div className={stylesAuth.form__item}>
							<div className={stylesAuth.form__input_content}>
								<p className={stylesAuth.form__text}>Email</p>
								<Input type='email' placeholder='Введите свой email...'></Input>
							</div>

							<div className={stylesAuth.button__conteiner}>
								<AuthButton>Продолжить</AuthButton>
							</div>
						</div>
					)}
				</div>

				<div className={stylesAuth.form__hide}>
				<div className={stylesAuth.form__conteiner_logo}>
					<img className={stylesAuth.form__logo} src={logo} alt="HypeFans" />
				</div>
					<div className={stylesAuth.form__input_content}>
						<p className={stylesAuth.form__text}>Email</p>
						<Input type='email' placeholder='Введите свой email...'></Input>
					</div>
					<div className={stylesAuth.form__input_content}>
						<p className={stylesAuth.form__text}>Пароль</p>
						<Input type='password' placeholder='Введите свой пароль...'></Input>
					</div>
					<Link to={'/registr'} className={stylesAuth.question__style}>Забыли пароль?</Link>
					<OtherEntrance />
					<div className={stylesAuth.button__conteiner}>
						<AuthButton>Войти</AuthButton>
					</div>
				</div>
			</form>
			<div className={stylesAuth.other}>
				<OtherEntrance />
			</div>
		</div>
	)
}
