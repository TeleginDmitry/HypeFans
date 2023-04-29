import React from 'react'
import styles from './StoryUser.module.scss'
import ConvertDate from 'utils/ConvertDate/ConvertDate'
import { useNavigate } from 'react-router-dom'

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

	const date = ConvertDate(date_create)

	return (
		<div className={styles.wrapper}>
			<div
				onClick={() => navigation(`/user/${user.id}`)}
				className={styles.user}
			>
				<img src={user.avatar} alt='' />
				<span>{user.prefix}</span>
			</div>
			<div className={styles.date}>
				<span>{date}</span>
			</div>
		</div>
	)
}

export default StoryUser
