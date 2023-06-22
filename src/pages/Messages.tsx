import useChangingTitlePage from 'hooks/useChangingTitlePage'
import React from 'react'

import MessagesComponent from '../components/screens/messages/Messages'

export default function Messages() {
  useChangingTitlePage('Сообщения')

  return <MessagesComponent></MessagesComponent>
}
