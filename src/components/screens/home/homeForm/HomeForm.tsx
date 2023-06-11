import React, { useState } from 'react'
import styles from './HomeForm.module.scss'
import SearchPost from './searchPost/SearchPost'
import CreationPost from './creationPost/CreationPost'
import { useTypedSelector } from 'hooks/useTypedSelector'

const HomeForm = () => {
	const [isActive, setIsActive] = useState(false)
	const isAuth = useTypedSelector(state => state.auth.isAuth)

	function changeStateActive() {
		setIsActive(state => (state = !state))
	}

	return (
		<div className={styles.wrapper}>
			{isAuth ? (
				<>
					{isActive ? (
						<SearchPost changeStateActive={changeStateActive}></SearchPost>
					) : (
						<CreationPost changeStateActive={changeStateActive}></CreationPost>
					)}
				</>
			) : (
				<SearchPost changeStateActive={changeStateActive}></SearchPost>
			)}
		</div>
	)
}

export default HomeForm
