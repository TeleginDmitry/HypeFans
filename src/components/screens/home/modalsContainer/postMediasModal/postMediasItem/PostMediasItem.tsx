import ShortUserInfo from 'components/shared/shortUserInfo/ShortUserInfo'
import { IPostMedia } from 'shared/interfaces/post.interface'
import React from 'react'

import styles from './PostMediasItem.module.scss'

interface IPostMediasItem {
  mediaItem: IPostMedia
}

const PostMediasItem = ({ mediaItem }: IPostMediasItem) => {
  const { date_joined, media, user, id } = mediaItem
  return (
    <div className={styles.wrapper}>
      <div className={styles.media__container}>
        <img className={styles.media} src={media} />
      </div>
      <div className={styles.content}>
        <ShortUserInfo
          username={user.username}
          prefix={user.prefix}
          avatar={user.avatar}
        ></ShortUserInfo>
      </div>
    </div>
  )
}

export default PostMediasItem
