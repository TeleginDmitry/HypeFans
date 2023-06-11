import React from 'react'
import styles from './MyStory.module.scss'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { API_URL } from 'configs/api.config'
import { useNavigate } from 'react-router-dom'
import { CREATION_PAGE } from 'configs/index.config'

const MyStory = () => {
	const user = useTypedSelector(state => state.auth.user)

	const navigation = useNavigate()

	function handlerClickStory() {
		navigation(`/${CREATION_PAGE}`)
	}

	return (
		<div onClick={handlerClickStory} className={styles.wrapper}>
			<div className={styles.avatar__container}>
				<img className={styles.avatar} src={API_URL + user.avatar} alt='' />
			</div>

			<p className={styles.prefix}>Твоя истоия</p>
		</div>
	)
}

export default MyStory
