import React from 'react'
import styles from './Login.module.scss'
import stylesAuth from '../Auth.module.scss'
import OtherEntrance from '../OtherEntrance/OtherEntrance'
import { Link } from 'react-router-dom'
import logo from '@assets/images/auth/logoBlack.png'
import { useFormik } from 'formik'
import { emailRegex } from 'shared/regex'
import useActions from 'hooks/useActions'
import ValidateField from 'components/shared/validateField/ValidateField'
import { Button, Input } from 'ui-hypefans-lib'

interface IInitialValues {
	email: string
	password: string
}

const initialValues: IInitialValues = {
	email: '',
	password: '',
}

const validate = (values: IInitialValues) => {
	const errors: Partial<IInitialValues> = {}

	if (!values.email) {
		errors.email = 'Это поле обязательно для заполнения'
	} else if (!emailRegex.test(values.email)) {
		errors.email = 'Неверный формат эл.почты'
	}

	if (!values.password) {
		errors.password = 'Это поле обязательно для заполнения'
	} else if (values.password.length < 5) {
		errors.password = 'Пароль не должен быть меньше 5 символов'
	}

	return errors
}

export default function Login() {
	const { login } = useActions()

	const formik = useFormik<IInitialValues>({
		initialValues,
		validate,
		onSubmit: onSubmitFunction,
	})

	async function onSubmitFunction(values: IInitialValues) {
		await login(values)
	}

	return (
		<div className={stylesAuth.wrapper}>
			<div className={stylesAuth.titles}>
				<h1 className={stylesAuth.title}>Вход</h1>
				<p className={stylesAuth.question}>
					Нет аккаунта?{' '}
					<Link to='/registration' className={stylesAuth.question__style}>
						Создайте
					</Link>
				</p>
			</div>
			<div className={stylesAuth.form__container_logo}>
				<img className={stylesAuth.form__logo} src={logo} alt='HypeFans' />
			</div>
			<form className={stylesAuth.form} onSubmit={formik.handleSubmit}>
				<div className={stylesAuth.form__wrapper}>
					<div className={stylesAuth.form__input_content}>
						<Input
							id='email'
							type='email'
							placeholder='Введите свой email...'
							label='Email'
							labelClassName={stylesAuth.form__text}
							onChange={formik.handleChange}
							isWrong={!!formik.errors.email && !!formik.touched.email}
							{...formik.getFieldProps('email')}
						></Input>
						<ValidateField
							isTouched={formik.touched.email}
							error={formik.errors.email}
						></ValidateField>
					</div>
					<div className={stylesAuth.form__input_content}>
						<Input
							id='password'
							type='password'
							placeholder='Введите свой пароль...'
							label='Пароль'
							labelClassName={stylesAuth.form__text}
							onChange={formik.handleChange}
							isWrong={!!formik.errors.password && !!formik.touched.password}
							{...formik.getFieldProps('password')}
						></Input>
						<ValidateField
							isTouched={formik.touched.password}
							error={formik.errors.password}
						></ValidateField>
					</div>
					<Link to={'/registration'} className={stylesAuth.question__style}>
						Забыли пароль?
					</Link>
					<div className={stylesAuth.other}>
						<OtherEntrance />
					</div>
					<div className={stylesAuth.button__container}>
						<Button type='submit'>Войти</Button>
					</div>
				</div>
			</form>
			<div className={stylesAuth.other}>
				<OtherEntrance />
			</div>
		</div>
	)
}
