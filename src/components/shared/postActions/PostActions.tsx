import React from 'react'
import styles from './PostActions.module.scss'
import { PostService } from 'services/post/Post.service'
import Comment from '../actions/comment/Comment'
import Bookmark from '../actions/bookmark/Bookmark'
import Like from '../actions/like/Like'

interface IPostActions {
	isLiked: boolean
	post_id: number
	handlerClickComment: () => void
	likes: number
	comments: number
}

const PostActions = ({
	likes,
	comments,
	isLiked,
	post_id,
	handlerClickComment,
}: IPostActions) => {
	async function createLike() {
		const response = await PostService.createLike(post_id)
		return response.data
	}

	async function deleteLike() {
		const response = await PostService.deleteLike(post_id)
		return response.data
	}

	return (
		<div className={styles.wrapper}>
			<Like
				likes={likes}
				isLiked={isLiked}
				onDelete={deleteLike}
				onCreate={createLike}
			></Like>
			<Comment comments={comments} onClick={handlerClickComment}></Comment>
			<Bookmark></Bookmark>
		</div>
	)
}

export default PostActions
