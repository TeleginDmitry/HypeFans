import RegisterComponent from '@components/screens/Auth/register/Register'
import useChangingTitlePage from 'hooks/useChangingTitlePage'
import React from 'react'

export default function Register() {
  useChangingTitlePage('Регистрация')

  return <RegisterComponent></RegisterComponent>
}
