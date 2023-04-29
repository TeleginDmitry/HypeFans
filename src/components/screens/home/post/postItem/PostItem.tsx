import React, { useState, useEffect } from 'react'
import styles from './PostItem.module.scss'
import { IPost } from 'shared/interfaces/post.interface'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ShortUserInfo from 'components/shared/shortUserInfo/ShortUserInfo'
import ConvertDate from 'utils/ConvertDate/ConvertDate'
import PostActions from './postActions/PostActions'
import PostSvgActions from './postSvgActions/PostSvgActions'
import PostComments from './postComments/PostComments'

export default function PostItem(post: IPost) {
	const { comments, likes, description, id, medias, user, date_joined } = post

	const [isVisibleActions, setIsVisibleActions] = useState(false)
	const [isVisibleComments, setIsVisibleComments] = useState(false)

	const [commentsState, setCommentsState] = useState(comments)
	const [likesState, setLikesState] = useState(likes)

	const navigate = useNavigate()

	const formattedDate = ConvertDate(date_joined)

	function handlerClickPoints() {
		setIsVisibleActions(state => !state)
	}

	function handlerClickComment() {
		setIsVisibleComments(state => !state)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			viewport={{ once: true }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className={styles.wrapper}
		>
			<div className={styles.container}>
				<div className={styles.user}>
					<ShortUserInfo
						onClick={() => {
							navigate(`/user/${post.user.id}`)
						}}
						avatar={user.avatar}
						prefix={user.prefix}
						username={user.username}
					></ShortUserInfo>
					<div className={styles.time__container}>
						<p className={styles.time}>{formattedDate}</p>
					</div>
					<div onClick={handlerClickPoints} className={styles.point__container}>
						<div className={styles.point}></div>
						<div className={styles.point}></div>
						<div className={styles.point}></div>
					</div>
					{isVisibleActions && (
						<div className={styles.actions__container}>
							<PostActions></PostActions>
						</div>
					)}
				</div>
				<div className={styles.content}>
					<div className={styles.description__container}>
						<p className={styles.description}>{description}</p>
					</div>
					{!!medias?.length && (
						<div className={styles.images__container}>
							{medias?.map(image => {
								return (
									<img
										className={styles.image}
										key={image.id}
										src={image.media}
										alt='HypeFans'
									/>
								)
							})}
						</div>
					)}
				</div>
				<PostSvgActions
					handlerClickComment={handlerClickComment}
					post_id={post.id}
					isLiked={post.is_liked}
					likes={likesState}
					setLikes={setLikesState}
					comments={commentsState}
				></PostSvgActions>

				{!!post.lastComment && (
					<PostComments
						countComments={commentsState}
						lastComment={post.lastComment}
						setComments={setCommentsState}
						post_id={id}
					></PostComments>
				)}
			</div>
		</motion.div>
	)
}
