import React, { useState } from 'react'
import styles from './HomeForm.module.scss'
import SearchPost from './searchPost/SearchPost'
import CreationPost from './creationPost/CreationPost'

const HomeForm = () => {
	const [isActive, setIsActive] = useState(false)

	function changeStateActive() {
		setIsActive(state => (state = !state))
	}

	return (
		<div className={styles.wrapper}>
			{isActive ? (
				<SearchPost changeStateActive={changeStateActive}></SearchPost>
			) : (
				<CreationPost changeStateActive={changeStateActive}></CreationPost>
			)}
		</div>
	)
}

export default HomeForm
