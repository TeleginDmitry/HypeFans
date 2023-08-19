import Agreement from '@ui/agreement/Agreement'
import Networks from '@ui/networks/Networks'

import LoginHeader from './loginHeader/LoginHeader'
import LoginForm from './loginForm/LoginForm'
import styles from './Login.module.scss'

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <LoginHeader></LoginHeader>
      <LoginForm></LoginForm>
      <Networks></Networks>
      <Agreement></Agreement>
    </div>
  )
}
