import RegisterComponent from '@components/screens/register/Register'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

export default function Register() {
  useChangingTitlePage('Регистрация')

  return <RegisterComponent></RegisterComponent>
}
