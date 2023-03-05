import React, { useState } from 'react'
import OtherEntrance from '../OtherEntrance/OtherEntrance'
import styles from './Registr.module.scss'
import stylesAuth from '../Auth.module.scss'
import { Link } from 'react-router-dom'
import Input from '@ui/input/Input'
import AuthButton from '@ui/Button/Button'
import { useAppDispatch } from '@hooks/ReduxHooks'
import { signupThunk } from '@store/AuthSlice/AuthSlice'
import { AuthSignup } from '../../../../shared/interfaces/auth.interface'

import { Formik, Field, Form } from 'formik'
import { useAppSelector } from '../../../../hooks/ReduxHooks'
import { getUserThunk } from '@store/AuthSlice/AuthSlice'

export default function Registr() {
	const dispatch = useAppDispatch()
	const data = useAppSelector((state) => state.auth)
	
	const [isNextInput, setIsNextInput] = useState(false)

	async function handlerSignup(data: AuthSignup) {
		return await dispatch(signupThunk(data))
	}

	async function getUser(id: number) {
		return await dispatch(getUserThunk({id}))
	}

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
			<Formik
				initialValues={{
					username: '',
					email: '',
					password: '',
					
				}}
				onSubmit={async values => {
					await handlerSignup(values).then(({payload}) => {
						console.log(payload)
						getUser(payload.user_id)
					})
				}}
			>
				<Form className={stylesAuth.form}>
					{isNextInput ? (
						<div className={stylesAuth.form__item}>
							<label htmlFor='password' className={stylesAuth.form__text}>
								Пароль
							</label>
							<Field
								id='password'
								name='password'
								type='password'
								placeholder='Введите свой пароль...'
							></Field>

							<div className={stylesAuth.button__conteiner}>
								<AuthButton>Войти</AuthButton>
							</div>
						</div>
					) : (
						<div className={stylesAuth.form__item}>
							<label htmlFor='email' className={stylesAuth.form__text}>
								Email
							</label>
							<Field
								id='email'
								name='email'
								type='email'
								placeholder='Введите свой email...'
							></Field>

							<label htmlFor='password' className={stylesAuth.form__text}>
								Пароль
							</label>
							<Field
								id='password'
								name='password'
								type='password'
								placeholder='Введите свой пароль...'
							></Field>
							<label htmlFor='username' className={stylesAuth.form__text}>
								Имя
							</label>
							<Field
								id='username'
								name='username'
								type='username'
								placeholder='Введите своё имя...'
							></Field>

							<div className={stylesAuth.button__conteiner}>
								<AuthButton>Продолжить</AuthButton>
							</div>
						</div>
					)}
				</Form>
			</Formik>

			<OtherEntrance />
		</div>
	)
}
