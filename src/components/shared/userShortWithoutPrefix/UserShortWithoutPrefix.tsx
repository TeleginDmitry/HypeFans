import { useNavigate } from 'react-router-dom'
import React from 'react'

import ConvertedDate from '../convertedDate/ConvertedDate'
import styles from './StoryUser.module.scss'

interface IStoryUser {
  user: {
    prefix: string
    avatar: string
    id: number
  }
  date_create: string
}

const StoryUser = ({ date_create, user }: IStoryUser) => {
  const navigation = useNavigate()

  return (
    <div className={styles.wrapper}>
      <div
        onClick={() => navigation(`/user/${user.id}`)}
        className={styles.user}
      >
        <img src={user.avatar} alt='' />
        <span>{user.prefix}</span>
      </div>
      <ConvertedDate date={date_create}></ConvertedDate>
    </div>
  )
}

export default StoryUser
