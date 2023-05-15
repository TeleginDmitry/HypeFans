import React from 'react'
import styles from './CreationPost.module.scss'
import MyAvatar from 'components/shared/myAvatar/MyAvatar'
import CreationForm from './creationForm/CreationForm'

interface ICreationPost {
	changeStateActive: () => void
}

const CreationPost = ({ changeStateActive }: ICreationPost) => {

	return (
		<div className={styles.wrapper}>
			<MyAvatar />
			<CreationForm changeStateActive={changeStateActive}></CreationForm>
		</div>
	)
}

export default CreationPost
