import { PostService } from 'services/post/Post.service'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect, memo } from 'react'
import useFetching from 'hooks/useFetching'

import SearchPostItem from '../searchPostItem/SearchPostItem'
import styles from './SearchPostList.module.scss'

interface ISearchPostList {
  onClickPost(post_id: number): void
  valueInput: string
}

const SearchPostList = ({ onClickPost, valueInput }: ISearchPostList) => {
  const { data: posts = [], fetchQuery } = useFetching({
    callback: async () => {
      const response = await PostService.getPostsSearch(valueInput)
      return response.data
    }
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchQuery()
    }, 300)

    return () => {
      clearTimeout(timeout)
    }
  }, [valueInput])

  return (
    <div className={styles.wrapper}>
      <AnimatePresence>
        {posts.map((post, index) => {
          return (
            <SearchPostItem
              onClickPost={onClickPost}
              index={index}
              key={post.id}
              post={post}
            ></SearchPostItem>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export default memo(SearchPostList)
