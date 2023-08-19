import UserDescription from 'components/shared/userInfo/userDescription/UserDescription'
import UserBackground from 'components/shared/userInfo/userBackground/UserBackground'
import UserDetails from 'components/shared/userInfo/userDetails/UserDetails'
import ComponentWithEqualUser from 'hocs/ComponentWithEqualUser'
import { IUser } from 'shared/interfaces/user.interface'
import { EDIT_PAGE } from 'configs/index.config'
import { Button } from 'ui-hypefans-lib'
import { Link } from 'react-router-dom'

import styles from './UserInfo.module.scss'

interface IUserInfo {
  user: undefined | IUser
}

const UserInfo = ({ user }: IUserInfo) => {
  return (
    <div className={styles.wrapper}>
      <UserBackground background={user.background}></UserBackground>

      <UserDetails user={user}></UserDetails>

      <UserDescription description={user.description}></UserDescription>

      <ComponentWithEqualUser user={user.id}>
        <div className={styles.button__container}>
          <Link to={'/' + EDIT_PAGE}>
            <Button className={styles.button}>Редактировать профиль</Button>
          </Link>
        </div>
      </ComponentWithEqualUser>
    </div>
  )
}

export default UserInfo
