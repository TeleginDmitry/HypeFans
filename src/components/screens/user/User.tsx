import { useParams } from 'react-router-dom'

import UserContent from './userContent/UserContent'
import styles from './User.module.scss'

const User = () => {
  const { user_id } = useParams()

  return (
    <div className={styles.wrapper}>
      <UserContent user_id={+user_id}></UserContent>
    </div>
  )
}

export default User
