import React from 'react'
import RegisterComponent from '@components/screens/Auth/Register/Register'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

export default function Register() {

  useChangingTitlePage('Регистрация')

  return (
    <RegisterComponent></RegisterComponent>
  )
}
