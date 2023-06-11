import React, { useState } from 'react'
import styles from './SearchPostItem.module.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { POST_PARAM } from 'configs/index.config'
import PostHeader from 'components/shared/postHeader/PostHeader'
import { IPostSearch } from 'shared/interfaces/post.interface'
import PostActions from 'components/shared/postActions/PostActions'

interface ISearchPostItem {
	post: IPostSearch
	onClickPost: (post_id: number) => void
	index: number
}

const SearchPostItem = ({ post, onClickPost, index }: ISearchPostItem) => {
	const { comments, likes, description, id, is_liked, date_joined, user } = post

	const navigate = useNavigate()

	const descriptionLimit =
		description.length > 150
			? description.substring(0, 150) + '...'
			: description

	function handlerOpenModal() {
		navigate(`/?${POST_PARAM}=${id}`)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: index * 0.1, duration: 0.3 }}
			exit={{ opacity: 0 }}
			className={styles.wrapper}
		>
			<div className={styles.container}>
				<PostHeader
					date_joined={date_joined}
					post_id={id}
					user={user}
				></PostHeader>
				<p onClick={() => onClickPost(id)} className={styles.description}>
					{descriptionLimit}
				</p>
				<PostActions
					post_id={id}
					isLiked={is_liked}
					comments={comments}
					likes={likes}
					handlerClickComment={handlerOpenModal}
				></PostActions>
			</div>
		</motion.div>
	)
}

export default SearchPostItem
