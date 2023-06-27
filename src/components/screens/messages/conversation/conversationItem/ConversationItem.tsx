import { IConversation } from 'shared/interfaces/conversation.interface'
import ConvertDate from 'utils/ConvertDate/ConvertDate'
import { USER_PAGE } from 'configs/index.config'
import { SERVER_URL } from 'configs/api.config'
import { useNavigate } from 'react-router-dom'
import React from 'react'

import styles from './ConversationItem.module.scss'

const ConversationItem = (props: IConversation) => {
  const { last_message_date, last_message, membership, avatar, name } = props

  const navigate = useNavigate()

  const formattedDate = ConvertDate(last_message_date)

  return (
    <div
      onClick={() => {
        navigate(`?${USER_PAGE}=${membership?.id}`, { replace: false })
      }}
      className={styles.conversation}
    >
      <div className={styles.avatar__container}>
        <img
          src={SERVER_URL + (membership?.avatar ? membership.avatar : avatar)}
          className={styles.avatar}
          alt='HypeFans'
        />
      </div>
      <div className={styles.conversation__info}>
        <span className={styles.username}>
          {membership?.username ? membership.username : name}
        </span>
        <p className={styles.last__message}>{last_message}</p>
      </div>
      <span className={styles.last__time}>{formattedDate}</span>
    </div>
  )
}

export default ConversationItem
