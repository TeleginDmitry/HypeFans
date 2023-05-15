import ShortUserInfo from 'components/shared/shortUserInfo/ShortUserInfo'
import React from 'react'
import { IPostSearch } from 'shared/interfaces/post.interface'
import styles from './PostItemSearch.module.scss'
import { motion } from 'framer-motion'

interface IPostItemSearch {
	post: IPostSearch
	clickPost: (post_id: number) => void
	index: number
}

const PostItemSearch = ({ post, clickPost, index }: IPostItemSearch) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: index * 0.1 }}
			onClick={() => clickPost(post.id)}
			className={styles.wrapper}
		>
			<ShortUserInfo {...post.user}></ShortUserInfo>
			<p className={styles.description}>{post.description}</p>
		</motion.div>
	)
}

export default PostItemSearch
