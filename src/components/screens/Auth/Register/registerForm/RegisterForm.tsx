import ValidateField from 'components/shared/validateField/ValidateField'
import { MIN_LETTER_PASSWORD } from 'configs/api.config'
import { Button, Input } from 'ui-hypefans-lib'
import { emailRegex } from 'shared/regex'
import useActions from 'hooks/useActions'
import { useFormik } from 'formik'
import React from 'react'

import styles from './RegisterForm.module.scss'

interface IInitialValues {
  password: string
  username: string
  email: string
}

const initialValues: IInitialValues = {
  password: '',
  username: '',
  email: ''
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

  const { getFieldProps, handleChange, handleSubmit, touched, errors } =
    useFormik<IInitialValues>({
      onSubmit: onSubmitFunction,
      initialValues,
      validate
    })

  function onSubmitFunction(values: IInitialValues) {
    register(values)
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
      <div className={styles.input__container}>
        <Input
          isWrong={!!errors.username && !!touched.username}
          labelClassName={styles.form__text}
          placeholder='Введите своё имя...'
          onChange={handleChange}
          type='username'
          id='username'
          label='Имя'
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
