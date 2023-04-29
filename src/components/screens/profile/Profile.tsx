import { useTypedSelector } from 'hooks/useTypedSelector'
import PostsList from '../home/post/postList/PostsList'
import styles from './Profile.module.scss'
import ProfileHeader from './ProfileHeader/ProfileHeader'

const Profile = () => {

	const user = useTypedSelector((state) => state.auth.user)

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<ProfileHeader></ProfileHeader>
				<div className={styles.posts__container}>
					{user?.id && <PostsList user_id={user.id}></PostsList>}
					
				</div>
			</div>
		</div>
	)
}

export default Profile
