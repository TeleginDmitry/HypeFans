import React from 'react'
import styles from './RegisterForm.module.scss'
import { useFormik } from 'formik'
import { emailRegex } from 'shared/regex'
import useActions from 'hooks/useActions'
import ValidateField from 'components/shared/validateField/ValidateField'
import { Button, Input } from 'ui-hypefans-lib'
import { MIN_LETTER_PASSWORD } from 'configs/api.config'

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
	} else if (values.password.length < MIN_LETTER_PASSWORD) {
		errors.password = `Пароль не должен быть меньше ${MIN_LETTER_PASSWORD} символов`
	}

	return errors
}

const RegisterForm = () => {
	const { register } = useActions()

	const {handleSubmit, handleChange, errors, touched, getFieldProps} = useFormik<IInitialValues>({
		initialValues,
		validate,
		onSubmit: onSubmitFunction,
	})

	function onSubmitFunction(values: IInitialValues) {
		register(values)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.input__container}>
				<Input
					id='email'
					type='email'
					placeholder='Введите свой email...'
					label='Email'
					labelClassName={styles.form__text}
					onChange={handleChange}
					isWrong={!!errors.email && !!touched.email}
					{...getFieldProps('email')}
				></Input>
				<ValidateField
					isTouched={touched.email}
					error={errors.email}
				></ValidateField>
			</div>

			<div className={styles.input__container}>
				<Input
					id='password'
					type='password'
					placeholder='Введите свой пароль...'
					label='Пароль'
					labelClassName={styles.form__text}
					onChange={handleChange}
					isWrong={!!errors.password && !!touched.password}
					{...getFieldProps('password')}
				></Input>
				<ValidateField
					isTouched={touched.password}
					error={errors.password}
				></ValidateField>
			</div>
			<div className={styles.input__container}>
				<Input
					id='username'
					type='username'
					placeholder='Введите своё имя...'
					label='Имя'
					labelClassName={styles.form__text}
					onChange={handleChange}
					isWrong={!!errors.username && !!touched.username}
					{...getFieldProps('username')}
				></Input>
				<ValidateField
					isTouched={touched.username}
					error={errors.username}
				></ValidateField>
			</div>

			<div className={styles.button__container}>
				<Button>Создать</Button>
			</div>
		</form>
	)
}

export default RegisterForm
