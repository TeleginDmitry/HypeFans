import { IConversation } from 'shared/interfaces/conversation.interface'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { chatService } from 'services/chat/chat.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

import MessageItem from '../conversationItem/ConversationItem'
import styles from './ConversationsList.module.scss'

const ConversationsList = () => {
  const user_id = useTypedSelector((state) => state.auth.user?.id)

  const { data: conversationList, refetch } = useQuery(
    ['conversation'],
    async (): Promise<IConversation[]> => {
      const response = await chatService.getConversation()
      return response.data
    },
    {
      // enabled: false
    }
  )

  // useEffect(() => {
  //   if (user_id) {
  //     refetch()
  //   }
  // }, [user_id])

  return (
    <ul className={styles.conversations}>
      {conversationList?.map((item) => {
        return <MessageItem key={item.id} {...item}></MessageItem>
      })}
    </ul>
  )
}

export default ConversationsList
