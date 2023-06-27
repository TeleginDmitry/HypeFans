import ConvertedDate from 'components/shared/convertedDate/ConvertedDate'
import { USER_PAGE } from 'configs/index.config'
import { useNavigate } from 'react-router-dom'
import React from 'react'

import styles from './PostCommentItemContent.module.scss'

interface IPostCommentItemContent {
  description: string
  date_joined: string
  username: string
  id: number
}

const PostCommentItemContent = (props: IPostCommentItemContent) => {
  const { description, date_joined, username, id } = props

  const navigation = useNavigate()

  function getOverUser() {
    navigation(`/${USER_PAGE}/${id}`)
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.username} onClick={getOverUser}>
        {username}
      </h2>
      <p className={styles.description}>{description}</p>
      <ConvertedDate date={date_joined}></ConvertedDate>
    </div>
  )
}

export default PostCommentItemContent
