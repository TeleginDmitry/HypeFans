import React, { useState } from 'react'
import styles from './PostComments.module.scss'
import { PostService } from 'services/post/Post.service'
import PostCommentItem from './postCommentItem/PostCommentItem'
import PostCommentForm from './postCommentForm/PostCommentForm'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { IComment } from 'shared/interfaces/post.interface'
import usePagination from 'hooks/usePagination'
import { IPagination } from 'shared/interfaces/pagination.interface'

interface IPostComments {
	post_id: number
	countComments: number
	lastComment: IComment
	setComments: React.Dispatch<React.SetStateAction<number>>
}

const PostComments = ({
	post_id,
	setComments,
	lastComment,
	countComments,
}: IPostComments) => {
	const isAuth = useTypedSelector(state => state.auth.isAuth)



	// const { fetchQuery } = useFetching(async params => {
	// 	const response = await PostService.getComments(params)
	// 	const data = response.data

	// 	if (response.status === 200) {
	// 		setPostComments(state => [...data.results, ...state])
	// 		setComments(() => data.count)
	// 		setOffset(state => (state += limit))
	// 	}
	// 	return data.results
	// })

	const {
		data: postComments,
		isLoading,
		handlerOffset,
		hasNextPage,
		totalPages,
		refetch,

	} = usePagination<IComment>({
		queryFunc: async (params): Promise<IPagination<IComment[]>> => {
			const response = await PostService.getComments(params)
			const data = response.data
			setComments(() => data.count)
			return data
		},
		queryKey: 'comments',
		queryParam: { post_id },
		initialOffset: 1,
		initialLimit: 3,
	})


	function decreaseComments() {
		setComments(state => (state -= 1))
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.comments}>
				<PostCommentItem
					decreaseComments={decreaseComments}
					comment={lastComment}
				></PostCommentItem>
				{postComments?.map(comment => {
					return (
						<PostCommentItem
							decreaseComments={decreaseComments}
							comment={comment}
						></PostCommentItem>
					)
				})}
			</div>

			{countComments > 1 ||  hasNextPage && (
				<span className={styles.show__comments} onClick={handlerOffset}>
					Показать следующие комментарии
				</span>
			)}

			{isAuth && (
				<PostCommentForm
					post_id={post_id}
				></PostCommentForm>
			)}
		</div>
	)
}

export default PostComments
