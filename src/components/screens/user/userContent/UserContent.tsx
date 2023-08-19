import PostsList from 'components/screens/home/post/postList/PostsList'
import { UserService } from 'services/user/User.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

import styles from './UserContent.module.scss'
import UserInfo from './userInfo/UserInfo'

interface IUserContent {
  user_id: number
}

const UserContent = ({ user_id }: IUserContent) => {
  const { data: user } = useQuery({
    queryFn: async () => {
      const response = await UserService.getUser(user_id)

      return response.data
    }
  })

  if (!user) return null

  return (
    <div className={styles.content}>
      <UserInfo user={user}></UserInfo>
      <PostsList user_id={user_id}></PostsList>
    </div>
  )
}

export default UserContent
