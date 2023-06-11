import React from 'react'
import styles from './CreationUser.module.scss'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { API_URL } from 'configs/api.config'
import { useNavigate } from 'react-router-dom'
import { PROFILE_PAGE } from 'configs/index.config'

const CreationUser = () => {
	const navigate = useNavigate()

	const user = useTypedSelector(state => state.auth.user)

	function clickWrapper() {
		navigate(`/${PROFILE_PAGE}`)
	}

	return (
		<div onClick={clickWrapper} className={styles.wrapper}>
			<img className={styles.logo} src={API_URL + user?.avatar} />
			<span className={styles.username}>{user?.username}</span>
		</div>
	)
}

export default CreationUser
