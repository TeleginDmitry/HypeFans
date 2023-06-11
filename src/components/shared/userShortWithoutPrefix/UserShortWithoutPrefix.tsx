import React from 'react'
import styles from './StoryUser.module.scss'
import ConvertDate from 'utils/ConvertDate/ConvertDate'
import { useNavigate } from 'react-router-dom'
import ConvertedDate from '../convertedDate/ConvertedDate'

interface IStoryUser {
	user: {
		id: number
		avatar: string
		prefix: string
	}
	date_create: string
}

const StoryUser = ({ user, date_create }: IStoryUser) => {
	const navigation = useNavigate()

	return (
		<div className={styles.wrapper}>
			<div
				onClick={() => navigation(`/user/${user.id}`)}
				className={styles.user}
			>
				<img src={user.avatar} alt='' />
				<span>{user.prefix}</span>
			</div>
			<ConvertedDate date={date_create}></ConvertedDate>
		</div>
	)
}

export default StoryUser
