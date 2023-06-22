import ProfileDescription from 'components/shared/profileHeader/profileDescription/ProfileDescription'
import ProfileBackground from 'components/shared/profileHeader/profileBackground/ProfileBackground'
import ProfileInfo from 'components/shared/profileHeader/profileInfo/ProfileInfo'
import { IUser } from 'shared/interfaces/user.interface'
import cn from '@utils/classNames/classNames'

import styles from './ProfileHeader.module.scss'

interface IProfileHeader {
  user: IUser
}

const ProfileHeader = ({ user }: IProfileHeader) => {
  return (
    <div className={styles.wrapper}>
      <ProfileBackground background={user?.background}></ProfileBackground>

      <ProfileInfo user={user}></ProfileInfo>

      <div
        className={cn(
          [styles.content],
          [user?.background, styles.content__relative]
        )}
      >
        <ProfileDescription
          description={user?.description}
        ></ProfileDescription>
      </div>
    </div>
  )
}

export default ProfileHeader
