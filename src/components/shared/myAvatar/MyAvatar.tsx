import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from 'hooks/useTypedSelector'
import styles from './MyAvatar.module.scss'
import { API_URL } from 'configs/api.config'
import { PROFILE_PAGE } from 'configs/index.config'

const MyAvatar = () => {
	const navigate = useNavigate()

	const user = useTypedSelector(state => state.auth.user)

	return (
		<div
			onClick={() => {
				navigate(`/${PROFILE_PAGE}`)
			}}
			className={styles.wrapper}
		>
			<img
				className={styles.avatar}
				src={API_URL + user?.avatar}
				alt='HypeFans'
			/>
		</div>
	)
}

export default MyAvatar
