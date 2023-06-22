import ValidateField from 'components/shared/validateField/ValidateField'
import { MIN_LETTER_PASSWORD } from 'configs/api.config'
import { REGISTER_PAGE } from 'configs/index.config'
import { Button, Input } from 'ui-hypefans-lib'
import { emailRegex } from 'shared/regex'
import useActions from 'hooks/useActions'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import React from 'react'

import styles from './LoginForm.module.scss'

interface IInitialValues {
  password: string
  email: string
}

const initialValues: IInitialValues = {
  password: '',
  email: ''
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
  } else if (values.password.length < MIN_LETTER_PASSWORD) {
    errors.password = `Пароль не должен быть меньше ${MIN_LETTER_PASSWORD} символов`
  }

  return errors
}

const LoginForm = () => {
  const { login } = useActions()

  const {
    getFieldProps,
    isSubmitting,
    handleChange,
    handleSubmit,
    touched,
    errors
  } = useFormik<IInitialValues>({
    onSubmit: onSubmitFunction,
    initialValues,
    validate
  })

  function onSubmitFunction(values: IInitialValues) {
    login(values)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input__container}>
        <Input
          isWrong={!!errors.email && !!touched.email}
          placeholder='Введите свой email...'
          labelClassName={styles.form__text}
          onChange={handleChange}
          label='Email'
          type='email'
          id='email'
          {...getFieldProps('email')}
        ></Input>
        <ValidateField
          isTouched={touched.email}
          error={errors.email}
        ></ValidateField>
      </div>
      <div className={styles.input__container}>
        <Input
          isWrong={!!errors.password && !!touched.password}
          placeholder='Введите свой пароль...'
          labelClassName={styles.form__text}
          onChange={handleChange}
          type='password'
          label='Пароль'
          id='password'
          {...getFieldProps('password')}
        ></Input>
        <ValidateField
          isTouched={touched.password}
          error={errors.password}
        ></ValidateField>
      </div>
      <Link to={`/${REGISTER_PAGE}`} className={styles.link}>
        Забыли пароль?
      </Link>
      <div className={styles.button__container}>
        <Button disabled={isSubmitting} type='submit'>
          Войти
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
