import ConvertedDate from 'components/shared/convertedDate/ConvertedDate'
import { IPostComment } from 'shared/interfaces/post.interface'
import { USER_PAGE } from 'configs/index.config'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '@configs/api.config'
import React from 'react'

import PostCommentActions from './postCommentActions/PostCommentActions'
import styles from './PostCommentItem.module.scss'

interface IPostCommentItem {
  comment: IPostComment
}

const PostCommentItem = ({ comment }: IPostCommentItem) => {
  const { date_joined, isLiked, likes, post, user, text, id } = comment

  const navigation = useNavigate()

  function getOverUser() {
    navigation(`/${USER_PAGE}/${user.id}`, { preventScrollReset: true })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.avatar__container} onClick={getOverUser}>
          <img src={API_URL + user.avatar} className={styles.avatar} alt='' />
        </div>
        <div className={styles.content}>
          <h2 className={styles.username} onClick={getOverUser}>
            {user.username}
          </h2>
          <p className={styles.text}>{text}</p>
          <ConvertedDate date={date_joined}></ConvertedDate>
        </div>
      </div>
      <div className={styles.postActions__container}>
        <PostCommentActions
          isLiked={isLiked}
          post_id={post}
          likes={likes}
          comment={id}
          user={user}
        ></PostCommentActions>
      </div>
    </div>
  )
}

export default PostCommentItem
