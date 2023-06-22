import { useTypedSelector } from 'hooks/useTypedSelector'
import { PROFILE_PAGE } from 'configs/index.config'
import { useNavigate } from 'react-router-dom'
import { API_URL } from 'configs/api.config'
import React from 'react'

import styles from './CreationUser.module.scss'

const CreationUser = () => {
  const navigate = useNavigate()

  const user = useTypedSelector((state) => state.auth.user)

  function clickWrapper() {
    navigate(`/${PROFILE_PAGE}`)
  }

  return (
    <div className={styles.wrapper} onClick={clickWrapper}>
      <img src={API_URL + user?.avatar} className={styles.logo} />
      <span className={styles.username}>{user?.username}</span>
    </div>
  )
}

export default CreationUser
