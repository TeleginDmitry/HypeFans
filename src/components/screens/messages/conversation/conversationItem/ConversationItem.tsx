import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IConversation } from 'shared/interfaces/conversation.interface'
import styles from './ConversationItem.module.scss'
import { SERVER_URL } from 'configs/api.config'
import ConvertDate from 'utils/ConvertDate/ConvertDate'

const ConversationItem = ({
	id,
	avatar,
	name,
	membership,
	last_message,
	last_message_date,
}: IConversation) => {
	const navigate = useNavigate()

	console.log(membership)

	const formattedDate = ConvertDate(last_message_date)

	return (
		<div
			onClick={() => {
				navigate(`?user=${membership?.id}`, { replace: false })
			}}
			className={styles.conversation}
		>
			<div className={styles.avatar__container}>
				<img
					className={styles.avatar}
					src={SERVER_URL + (membership?.avatar ? membership.avatar : avatar)}
					alt='HypeFans'
				/>
			</div>
			<div className={styles.conversation__info}>
				<span className={styles.username}>{membership?.username ? membership.username : name}</span>
				<p className={styles.last__message}>{last_message}</p>
			</div>
			<span className={styles.last__time}>{formattedDate}</span>
		</div>
	)
}

export default ConversationItem
