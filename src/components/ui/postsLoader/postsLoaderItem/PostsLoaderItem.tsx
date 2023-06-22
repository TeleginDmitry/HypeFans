import { ReactComponent as Bookmark } from '@assets/images/post/bookmark.svg'
import { ReactComponent as Comment } from '@assets/images/post/comments.svg'
import { ReactComponent as Like } from '@assets/images/post/like.svg'
import React from 'react'

import styles from './PostsLoaderItem.module.scss'

const PostsLoaderItem = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.info}>
            <span className={styles.logo}></span>
            <div className={styles.text__container}>
              <span className={styles.username}></span>
              <span className={styles.prefix}></span>
            </div>
          </div>

          <span className={styles.time}></span>
        </div>
        <div className={styles.description__container}>
          <span className={styles.description}></span>
          <span className={styles.description}></span>
          <span className={styles.description}></span>
          <span className={styles.description}></span>
          <span className={styles.description}></span>
        </div>
        <div className={styles.container__images}>
          <span className={styles.image}></span>
          <span className={styles.image}></span>
        </div>
        <div className={styles.action}>
          <div className={styles.action__block}>
            <Like className={styles.action__svg}></Like>
            <Comment className={styles.action__svg}></Comment>
          </div>
          <div className={styles.action__block}>
            <Bookmark className={styles.action__svg}></Bookmark>
          </div>
        </div>
        <span className={styles.likes}></span>
        <span className={styles.comments}></span>
      </div>
    </div>
  )
}

export default PostsLoaderItem
