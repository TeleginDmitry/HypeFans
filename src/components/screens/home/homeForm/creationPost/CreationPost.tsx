import MyAvatar from 'components/shared/myAvatar/MyAvatar'
import React from 'react'

import CreationForm from './creationForm/CreationForm'
import styles from './CreationPost.module.scss'

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
