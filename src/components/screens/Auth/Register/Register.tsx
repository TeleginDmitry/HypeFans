import React, {  } from 'react'
import styles from './Registr.module.scss'
import stylesAuth from '../Auth.module.scss'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import logo from '@assets/images/auth/logoBlack.png'
import { emailRegex } from 'shared/regex'
import useActions from 'hooks/useActions'
import OtherEntrance from '../OtherEntrance/OtherEntrance'
import ValidateField from 'components/shared/validateField/ValidateField'
import { Button, Input } from 'ui-hypefans-lib'

interface IInitialValues {
	username: string
	email: string
	password: string
}

const initialValues: IInitialValues = {
	email: '',
	username: '',
	password: '',
}

const validate = (values: IInitialValues) => {
	const errors: Partial<IInitialValues> = {}

	if (!values.username) {
		errors.username = 'Это поле обязательно для заполнения'
	}

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

export default function Register() {
	const { register } = useActions()

	const formik = useFormik<IInitialValues>({
		initialValues,
		validate,
		onSubmit: onSubmitFunction,
	})

	async function onSubmitFunction(values: IInitialValues) {
		await register(values)
	}

	return (
		<div className={stylesAuth.wrapper}>
			<div className={stylesAuth.titles}>
				<h1 className={stylesAuth.title}>Регистрация</h1>
				<p className={stylesAuth.question}>
					Уже есть аккаунт?{' '}
					<Link
						to='/login'
						replace={false}
						className={stylesAuth.question__style}
					>
						Войдите
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
					<div className={stylesAuth.form__input_content}>
						<Input
							id='username'
							type='username'
							placeholder='Введите своё имя...'
							label='Имя'
							labelClassName={stylesAuth.form__text}
							onChange={formik.handleChange}
							isWrong={!!formik.errors.username && !!formik.touched.username}
							{...formik.getFieldProps('username')}
						></Input>
						<ValidateField
							isTouched={formik.touched.username}
							error={formik.errors.username}
						></ValidateField>
					</div>

					<div className={stylesAuth.button__container}>
						<Button>Создать</Button>
					</div>
				</div>
			</form>
			<div className={stylesAuth.other}>
				<OtherEntrance />
			</div>
		</div>
	)
}
