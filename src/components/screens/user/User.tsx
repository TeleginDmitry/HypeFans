import { useNavigate, useParams } from 'react-router-dom'
import PostsList from '../home/post/postList/PostsList'
import styles from './User.module.scss'
import { useEffect } from 'react'
import { UserService } from 'services/user/User.service'
import { IUser } from 'shared/interfaces/user.interface'
import { useTypedSelector } from 'hooks/useTypedSelector'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import useFetching from 'hooks/useFetching'
import { PROFILE_PAGE } from 'configs/index.config'

const User = () => {
	const navigate = useNavigate()

	const { isLoading, user: meUser } = useTypedSelector(state => state.auth)

	const { user_id } = useParams()

	const { data: user, fetchQuery } = useFetching<IUser>({
		callback: async () => {
			const response = await UserService.getUser(user_id)

			return response.data
		},
	})

	useEffect(() => {
		if (isLoading === false) {
			if (meUser?.id && meUser.id === +user_id)
				return navigate(`/${PROFILE_PAGE}`, { replace: true })
			fetchQuery()
		}
	}, [meUser?.id, user_id])

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<ProfileHeader user={user}></ProfileHeader>

				<div className={styles.posts__container}>
					<PostsList user_id={user_id}></PostsList>
				</div>
			</div>
		</div>
	)
}

export default User
