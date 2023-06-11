import React from 'react'
import MessagesComponent from '../components/screens/messages/Messages'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

export default function Messages() {

  useChangingTitlePage('Сообщения')

  return (
    <MessagesComponent></MessagesComponent>
  )
}