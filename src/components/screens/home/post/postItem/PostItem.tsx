import React, { useState } from 'react'
import styles from './PostItem.module.scss'
import { IPost } from 'shared/interfaces/post.interface'
import { motion } from 'framer-motion'
import PostComments from './postComments/PostComments'
import { useTypedSelector } from 'hooks/useTypedSelector'
import PostCommentForm from './postComments/postCommentForm/PostCommentForm'
import PostContent from './postContent/PostContent'
import PostHeader from 'components/shared/postHeader/PostHeader'
import PostActions from 'components/shared/postActions/PostActions'

interface IPostItem {
	post: IPost
}

export default function PostItem({ post }: IPostItem) {
	const {
		comments,
		likes,
		description,
		id,
		medias,
		user,
		date_joined,
		isLiked,
		lastComment,
	} = post

	const isAuth = useTypedSelector(state => state.auth.isAuth)

	const [isClickComment, setClickComment] = useState(false)

	function handlerClickComment() {
		setClickComment(state => (state = !state))
	}

	const isShowForm = isAuth && (lastComment || isClickComment)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			viewport={{ once: true }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className={styles.wrapper}
		>
			<div className={styles.container}>
				<PostHeader
					date_joined={date_joined}
					post_id={id}
					user={user}
				></PostHeader>
				<PostContent
					post_id={id}
					description={description}
					medias={medias}
				></PostContent>
				<div className={styles.actions__container}>
					<PostActions
						post_id={id}
						isLiked={isLiked}
						comments={comments}
						likes={likes}
						handlerClickComment={handlerClickComment}
					></PostActions>
				</div>

				<PostComments
					countComments={comments}
					lastComment={lastComment}
					post_id={id}
				></PostComments>
				{isShowForm && <PostCommentForm post_id={id}></PostCommentForm>}
			</div>
		</motion.div>
	)
}
