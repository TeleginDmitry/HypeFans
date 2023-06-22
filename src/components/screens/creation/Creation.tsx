import CreationChoose from 'components/shared/creationChoose/CreationChoose'
import React from 'react'

import ModalsContainer from './modalsContainer/ModalsContainer'
import CreationHeader from './creationHeader/CreationHeader'
import CreationForm from './creationForm/CreationForm'
import CreationUser from './creationUser/CreationUser'
import styles from './Creation.module.scss'

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
