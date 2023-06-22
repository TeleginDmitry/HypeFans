import ProfileDescription from 'components/shared/profileHeader/profileDescription/ProfileDescription'
import ProfileBackground from 'components/shared/profileHeader/profileBackground/ProfileBackground'
import ProfileInfo from 'components/shared/profileHeader/profileInfo/ProfileInfo'
import { useTypedSelector } from 'hooks/useTypedSelector'
import cn from '@utils/classNames/classNames'
import { Button } from 'ui-hypefans-lib'
import { Link } from 'react-router-dom'

import styles from './ProfileHeader.module.scss'

const ProfileHeader = () => {
  const user = useTypedSelector((state) => state.auth.user)

  return (
    <div className={styles.wrapper}>
      <ProfileBackground background={user?.background}></ProfileBackground>

      <ProfileInfo isMyProfile={true} user={user}></ProfileInfo>

      <div
        className={cn(
          [styles.content],
          [user?.background, styles.content__relative]
        )}
      >
        <ProfileDescription
          description={user?.description}
        ></ProfileDescription>
        <div className={styles.button__container}>
          <Link to={'/edit'}>
            <Button className={styles.button}>Редактировать профиль</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
