import React from 'react'
import styles from './PostsList.module.scss'
import { posts } from './data'
import PostItem from '../postItem/PostItem'

export default function PostsList() {
  
	return (
    <div className={styles.posts__list}>
    {
      posts.map((post) => {
        return <PostItem key={post.id} {...post}></PostItem>
      })
    }
    </div>
  )
}
