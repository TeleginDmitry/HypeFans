import ComponentWithNotEqualUser from 'hocs/ComponentWithNotEqualUser'
import Avatar from 'components/ui/avatars/avatar/Avatar'
import { IUser } from 'shared/interfaces/user.interface'
import { SERVER_URL } from 'configs/api.config'

import UserActions from './userActions/UserActions'
import styles from './UserDetails.module.scss'

interface IUserDetails {
  user: IUser
}

const UserDetails = ({ user }: IUserDetails) => {
  return (
    <div
      style={{ top: user.background ? '-55px' : '0px' }}
      className={styles.wrapper}
    >
      <div className={styles.container}>
        <Avatar
          src={`${SERVER_URL}${user.avatar}`}
          className={styles.avatar}
          draggable={false}
          size='large'
        />
        {user.status && <div className={styles.status}></div>}
        <ComponentWithNotEqualUser user={user.id}>
          <UserActions></UserActions>
        </ComponentWithNotEqualUser>
      </div>
      <h2 className={styles.username}>{user.username}</h2>
      <span className={styles.prefix}>{user.prefix}</span>
      <div className={styles.count__contents}>
        <span className={styles.count__posts}>{user.posts} постов</span>
        <span className={styles.count__fans}>365 друзей</span>
      </div>
    </div>
  )
}

export default UserDetails
