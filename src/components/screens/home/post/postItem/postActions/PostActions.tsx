import React from 'react'
import styles from './PostActions.module.scss'

const PostActions = () => {
  return (
    <ul className={styles.actions}>
      <li className={styles.action}>Копировать ссылку</li>
      <li className={styles.action}>Спрятать из ленты</li>
      <li className={styles.action}>Пожаловаться</li>
    </ul>
  )
}

export default PostActions