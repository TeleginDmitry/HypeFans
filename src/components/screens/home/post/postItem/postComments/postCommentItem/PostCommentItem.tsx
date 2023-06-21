import React, { useState } from 'react'
import { IPostComment } from 'shared/interfaces/post.interface'
import styles from './PostCommentItem.module.scss'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '@configs/api.config'
import PostCommentActions from './postCommentActions/PostCommentActions'
import ConvertedDate from 'components/shared/convertedDate/ConvertedDate'

interface IPostCommentItem {
	comment: IPostComment
}

const PostCommentItem = ({ comment }: IPostCommentItem) => {
	const { date_joined, id, text, user, post, likes, isLiked } = comment

	const navigation = useNavigate()

	function getOverUser() {
		navigation(`/user/${user.id}`, { preventScrollReset: true })
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div onClick={getOverUser} className={styles.avatar__container}>
					<img className={styles.avatar} src={API_URL + user.avatar} alt='' />
				</div>
				<div className={styles.content}>
					<h2 onClick={getOverUser} className={styles.username}>
						{user.username}
					</h2>
					<p className={styles.text}>{text}</p>
					<ConvertedDate date={date_joined}></ConvertedDate>
				</div>
			</div>
			<div className={styles.postActions__container}>
				<PostCommentActions
					likes={likes}
					isLiked={isLiked}
					user={user}
					post_id={post}
					comment={id}
				></PostCommentActions>
			</div>
		</div>
	)
}

export default PostCommentItem
