import React, { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getAccessToken } from 'services/auth/Auth.helper'
import styles from './Chat.module.scss'
import Header from './header/Header'
import InputChat from './inputChat/InputChat'


const Chat = () => {
	const socket = useRef(null)

	const [searchParams, setSearchParams] = useSearchParams()

	const user_id = searchParams.get('user')

	useEffect(() => {

		const token = getAccessToken()

		socket.current = new WebSocket(`ws://localhost:8000/ws/chat/${user_id}${!!token ? '?token='+ token: ''}`)

		socket.current.onopen = () => {
			console.log('Соединение установлено')
		}

		socket.current.onclose = () => {
			console.log('Соединение закрыто')
		}

		socket.current.onerror = error => {
			console.error('Ошибка:', error.message)
		}

		socket.current.onmessage = event => {
			console.log('Получено сообщение:', event.data)
		}

		// socket.current.send('Привет, сервер!')
	}, [user_id])

	return (
		<div className={styles.wrapper}>
			<Header></Header>
			<div className={styles.messages}>

			</div>
			<InputChat></InputChat>
		</div>
	)
}

export default Chat
