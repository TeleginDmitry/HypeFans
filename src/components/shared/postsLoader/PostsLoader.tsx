import React from 'react'
import PostsLoaderItem from './postsLoaderItem/PostsLoaderItem'
import styles from './PostsLoader.module.scss'

const PostsLoader = () => {
  return (
    <div className={styles.wrapper}>
      <PostsLoaderItem></PostsLoaderItem>
      <PostsLoaderItem></PostsLoaderItem>
      <PostsLoaderItem></PostsLoaderItem>
    </div>
  )
}

export default PostsLoader