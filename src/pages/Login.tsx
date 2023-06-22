import useChangingTitlePage from 'hooks/useChangingTitlePage'
import React from 'react'

import LoginComponent from '../components/screens/Auth/Login/Login'

export default function Login() {
  useChangingTitlePage('Вход')

  return <LoginComponent></LoginComponent>
}
