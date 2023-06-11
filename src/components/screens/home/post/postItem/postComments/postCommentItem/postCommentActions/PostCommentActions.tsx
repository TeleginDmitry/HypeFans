import React from 'react'
import styles from './PostCommentActions.module.scss'
import { PostService } from 'services/post/Post.service'
import { useQueryClient } from '@tanstack/react-query'
import { COMMENTS_KEY } from 'configs/index.config'
import { IShortUser } from 'shared/interfaces/user.interface'
import Like from 'components/shared/actions/like/Like'
import Delete from 'components/shared/actions/delete/Delete'

interface IPostCommentActions {
	comment: number
	post_id: number
	user: IShortUser
	likes: number
	isLiked: boolean
}

const PostCommentActions = (props: IPostCommentActions) => {
	const { comment, post_id, user, likes, isLiked } = props
	const queryClient = useQueryClient()

	async function createLike() {
		const data = {
			comment,
		}
		PostService.createCommentLike(data)
	}

	async function deleteLike() {
		const data = {
			comment,
		}

		const response = await PostService.deleteCommentLike(data)
		return response.data
	}

	async function deleteComment() {
		const response = await PostService.deleteComment(comment)

		if (response.status === 204) {
			queryClient.prefetchInfiniteQuery([COMMENTS_KEY, post_id])
		}
		return response.data
	}

	return (
		<div className={styles.actions}>
			<Delete onDelete={deleteComment} user_id={user.id}></Delete>
			<Like
				likes={likes}
				isLiked={isLiked}
				onDelete={deleteLike}
				onCreate={createLike}
			></Like>
		</div>
	)
}

export default PostCommentActions
