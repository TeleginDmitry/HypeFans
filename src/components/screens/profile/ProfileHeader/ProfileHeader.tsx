import UserDescription from 'components/shared/userInfo/userDescription/UserDescription'
import UserBackground from 'components/shared/userInfo/userBackground/UserBackground'
import UserDetails from 'components/shared/userInfo/userDetails/UserDetails'
import { IUser } from 'shared/interfaces/user.interface'
import { Button } from 'ui-hypefans-lib'
import { Link } from 'react-router-dom'

import styles from './ProfileHeader.module.scss'

interface IProfileHeader {
  user: IUser
}

const ProfileHeader = ({ user }: IProfileHeader) => {
  return (
    <div className={styles.wrapper}>
      <UserBackground background={user.background}></UserBackground>

      <UserDetails user={user}></UserDetails>
      <UserDescription description={user.description}></UserDescription>
      <div className={styles.button__container}>
        <Link to={'/edit'}>
          <Button className={styles.button}>Редактировать профиль</Button>
        </Link>
      </div>
    </div>
  )
}

export default ProfileHeader
