import { useTypedSelector } from "hooks/useTypedSelector";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { chatService } from "services/chat/chat.service";
import MessageItem from "../conversationItem/ConversationItem";
import { dataMessages } from "./data";
import styles from "./ConversationsList.module.scss";
import { IConversation } from "shared/interfaces/conversation.interface";

const ConversationsList = () => {

  const user_id = useTypedSelector((state) => state.auth.user?.id)

  const {data: conversationList, refetch} = useQuery('conversation', async (): Promise<IConversation[]> => {
    const response = await chatService.getConversation()
    return response.data
  }, {
    // enabled: false
  })

  
  // useEffect(() => {
  //   if (user_id) {
  //     refetch()
  //   }
  // }, [user_id])

  console.log(conversationList)


  return (
    <ul className={styles.conversations}>
      {conversationList?.map((item) => {
        return <MessageItem key={item.id} {...item}></MessageItem>;
      })}
    </ul>
  );
};

export default ConversationsList;
