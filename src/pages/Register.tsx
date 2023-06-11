import React from 'react'
import RegisterComponent from '../components/screens/Auth/register/Register'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

export default function Register() {

  useChangingTitlePage('Регистрация')

  return (
    <RegisterComponent></RegisterComponent>
  )
}
