import React, { useState } from 'react'
import styles from './PostItem.module.scss'
import { IPost } from 'shared/interfaces/post.interface'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ShortUserInfo from 'components/shared/shortUserInfo/ShortUserInfo'
import ConvertDate from 'utils/ConvertDate/ConvertDate'
import PostActions from './postActions/PostActions'
import PostSvgActions from './postSvgActions/PostSvgActions'
import PostComments from './postComments/PostComments'
import Points from 'components/shared/points/Points'
import FlexibleImages from 'components/shared/flexibleImages/FlexibleImages'
import { POST_PARAM } from 'configs/index.config'

interface IPostItem {
	post: IPost
	isForModal?: boolean
}

export default function PostItem({ post, isForModal = false }: IPostItem) {
	const {
		comments,
		likes,
		description,
		id,
		medias,
		user,
		date_joined,
		is_liked,
		lastComment,
	} = post

	const [isVisibleActions, setIsVisibleActions] = useState(false)

	const [commentsState, setCommentsState] = useState(comments)
	const [likesState, setLikesState] = useState(likes)
	const [isLikedState, setIsLiked] = useState(is_liked)
	const navigate = useNavigate()

	const formattedDate = ConvertDate(date_joined)

	function handlerClickPoints() {
		setIsVisibleActions(state => !state)
	}

	function handlerOpenModal() {
		navigate(`/?${POST_PARAM}=${id}`)
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
							navigate(`/user/${user.id}`)
						}}
						avatar={user.avatar}
						prefix={user.prefix}
						username={user.username}
					></ShortUserInfo>
					<div className={styles.time__container}>
						<p className={styles.time}>{formattedDate}</p>
					</div>
					<Points
						onClick={handlerClickPoints}
						className={styles.point__container}
					></Points>
					{isVisibleActions && (
						<div className={styles.actions__container}>
							<PostActions post_id={id}></PostActions>
						</div>
					)}
				</div>
				<div className={styles.content}>
					<div
						onClick={handlerOpenModal}
						className={styles.description__container}
					>
						<p className={styles.description}>{description}</p>
					</div>
					{!!medias?.length && (
						<FlexibleImages images={medias}></FlexibleImages>
					)}
				</div>
				<PostSvgActions
					handlerClickComment={handlerOpenModal}
					post_id={id}
					isLiked={isLikedState}
					likes={likesState}
					setLikesState={setLikesState}
					comments={commentsState}
					setIsLiked={setIsLiked}
				></PostSvgActions>

				{!!lastComment && (
					<PostComments
						countComments={commentsState}
						lastComment={lastComment}
						isForModal={isForModal}
						post_id={id}
					></PostComments>
				)}
			</div>
		</motion.div>
	)
}
