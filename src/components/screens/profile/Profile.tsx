import { useTypedSelector } from 'hooks/useTypedSelector'

import ProfileHeader from './ProfileHeader/ProfileHeader'
import PostsList from '../home/post/postList/PostsList'
import styles from './Profile.module.scss'

const Profile = () => {
  const user = useTypedSelector((state) => state.auth.user)

  if (!user) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <ProfileHeader user={user}></ProfileHeader>
        <div className={styles.posts__container}>
          <PostsList user_id={user.id}></PostsList>
        </div>
      </div>
    </div>
  )
}

export default Profile
