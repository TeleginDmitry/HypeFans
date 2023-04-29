import styles from './ProfileHeader.module.scss'
import { useTypedSelector } from 'hooks/useTypedSelector'
import ProfileBackground from 'components/shared/profileHeader/profileBackground/ProfileBackground'
import ProfileInfo from 'components/shared/profileHeader/profileInfo/ProfileInfo'
import ProfileDescription from 'components/shared/profileHeader/profileDescription/ProfileDescription'
import { Link } from 'react-router-dom'
import Button from 'components/ui/button/Button'
import { classNames as cn } from 'utils/classNames/classNames'

const ProfileHeader = () => {
	const user = useTypedSelector(state => state.auth.user)

	return (
		<div className={styles.wrapper}>
			<ProfileBackground background={user?.background}></ProfileBackground>

			<ProfileInfo isMyProfile={true} user={user}></ProfileInfo>

			<div className={user?.background ? styles.content : cn([styles.content, styles.content__relative])}>
				<ProfileDescription
					description={user?.description}
				></ProfileDescription>
				<div className={styles.button__container}>
					<Link to={'/edit'}>
						<Button>Редактировать профиль</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProfileHeader
