import useChangingTitlePage from 'hooks/useChangingTitlePage'

import LoginComponent from '../components/screens/login/Login'

export default function Login() {
  useChangingTitlePage('Вход')

  return <LoginComponent></LoginComponent>
}
