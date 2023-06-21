import React from 'react'
import styles from './Creation.module.scss'
import CreationUser from './creationUser/CreationUser'
import CreationForm from './creationForm/CreationForm'
import CreationHeader from './creationHeader/CreationHeader'
import ModalsContainer from './modalsContainer/ModalsContainer'
import CreationChoose from 'components/shared/creationChoose/CreationChoose'

const Creation = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<CreationHeader></CreationHeader>
				<CreationChoose></CreationChoose>
				<CreationUser></CreationUser>
				<CreationForm></CreationForm>
				<ModalsContainer></ModalsContainer>
			</div>
		</div>
	)
}

export default Creation
