import React from 'react'
import styles from './postList.module.scss'
import { posts } from './data'
import PostItem from '../postItem/PostItem'

export default function PostsList() {
  
	return (
    <>
    {
      posts.map((post) => {
        return <PostItem key={post.id} {...post}></PostItem>
      })
    }
    </>
  )
}
