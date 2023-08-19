import { Message, Share } from 'icons-hypefans-lib'
import React from 'react'

import styles from './UserActions.module.scss'

const UserActions = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Share strokeWidth={1.5} size='large'></Share>
      </li>
      <li className={styles.item}>
        <Message strokeWidth={1.5} size='large'></Message>
      </li>
    </ul>
  )
}

export default UserActions
