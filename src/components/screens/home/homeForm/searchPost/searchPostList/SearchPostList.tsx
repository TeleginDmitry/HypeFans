import React, { memo, useEffect } from 'react'
import SearchPostItem from '../searchPostItem/SearchPostItem'
import styles from './SearchPostList.module.scss'
import { PostService } from 'services/post/Post.service'
import useFetching from 'hooks/useFetching'
import { AnimatePresence } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { SEARCH_POST_KEY } from 'configs/index.config'

interface ISearchPostList {
	onClickPost(post_id: number): void
	valueInput: string
}

const SearchPostList = ({ onClickPost, valueInput }: ISearchPostList) => {
	const { data: posts = [] } = useQuery({
		queryKey: [SEARCH_POST_KEY, valueInput],
		queryFn: async () => {
			const response = await PostService.getPostsSearch(valueInput)
			return response.data
		},
		keepPreviousData: true,
	})

	return (
		<div className={styles.wrapper}>
			<AnimatePresence>
				{posts.map((post, index) => {
					return (
						<SearchPostItem
							onClickPost={onClickPost}
							key={post.id}
							post={post}
							index={index}
						></SearchPostItem>
					)
				})}
			</AnimatePresence>
		</div>
	)
}

export default memo(SearchPostList)
