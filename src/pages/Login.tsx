import React from 'react'
import LoginComponent from '../components/screens/Auth/Login/Login'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

export default function Login() {

  useChangingTitlePage('Вход')

  return (
    <LoginComponent></LoginComponent>
  )
}
