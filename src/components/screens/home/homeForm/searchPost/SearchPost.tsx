import React, { useEffect, useState } from 'react'
import styles from './SearchPost.module.scss'
import { ReactComponent as Cancel } from '@assets/images/homeHeader/clear.svg'
import { ReactComponent as Search } from '@assets/images/homeHeader/search.svg'
import MyAvatar from 'components/shared/myAvatar/MyAvatar'
import { PostService } from 'services/post/Post.service'
import useFetching from 'hooks/useFetching'
import PostItemSearch from './postItemSearch/PostItemSearch'
import { useNavigate } from 'react-router-dom'

interface ISearchPost {
	changeStateActive: () => void
}

const SearchPost = ({ changeStateActive }: ISearchPost) => {
	const navigate = useNavigate()

	const [valueInput, setValueInput] = useState('')

	const {
		data: posts = [],
		isLoading,
		fetchQuery,
	} = useFetching({
		callback: async (description: string) => {
			const response = await PostService.getPostsSearch(description)
			return response.data
		},
	})

	function onChange(input: React.ChangeEvent<HTMLInputElement>) {
		setValueInput(input.target.value)
	}

	function clickPost(post_id: number) {
		setValueInput('')

		navigate(`/?post=${post_id}`)
	}

	useEffect(() => {
		if (!isLoading && valueInput) fetchQuery(valueInput)
	}, [valueInput])

	return (
		<div className={styles.wrapper}>
			<MyAvatar />
			<div className={styles.searching}>
				<input
					className={styles.searching__input}
					type='text'
					placeholder='Поиск поста...'
					onChange={onChange}
					value={valueInput}
				/>
			</div>
			<div onClick={changeStateActive} className={styles.cancel__container}>
				<Cancel className={styles.cancel}></Cancel>
			</div>
			{!!posts.length && valueInput && (
				<div className={styles.posts__container}>
					{posts.map((post, index) => {
						return <PostItemSearch  clickPost={clickPost} key={post.id} post={post} index={index}></PostItemSearch>
					})}
				</div>
			)}
		</div>
	)
}

export default SearchPost
