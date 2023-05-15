import React, { useEffect, useState } from 'react'
import styles from './PostComments.module.scss'
import { PostService } from '@services/post/Post.service'
import PostCommentItem from './postCommentItem/PostCommentItem'
import PostCommentForm from './postCommentForm/PostCommentForm'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { IComment } from 'shared/interfaces/post.interface'
import Loader from '@ui/loader/Loader'
import usePaginationCustom from 'hooks/usePaginationCustom'
import useCursorPagination from 'hooks/useCursorPagination'

interface IPostComments {
	post_id: number
	countComments: number
	lastComment: IComment
	isForModal?: boolean
}

const PostComments = ({
	post_id,
	lastComment,
	countComments,
	isForModal,
}: IPostComments) => {
	const isAuth = useTypedSelector(state => state.auth.isAuth)

	const {
		data: postComments,
		hasNextPage,
		fetchNextPage,
		isLoading,
		refetch,
	} = useCursorPagination<IComment>(
		async params => {
			const response = await PostService.getComments(params)
			return response.data
		},
		{
			queryParam: { post_id },
			isInfinity: true,
			initialState: [lastComment],
		}
	)

	return (
		<div className={styles.wrapper}>
			<div className={styles.comments__container}>
				<div className={styles.comments}>
					{postComments?.map(comment => {
						return (
							<PostCommentItem
								refetch={refetch}
								key={comment.id}
								comment={comment}
							></PostCommentItem>
						)
					})}
				</div>
			</div>

			{/* {isLoading && <Loader></Loader>} */}

			{((hasNextPage === undefined && countComments > postComments.length) ||
				hasNextPage) && (
				<span
					className={styles.show__comments}
					onClick={() => !isLoading && fetchNextPage()}
				>
					Показать следующие комментарии
				</span>
			)}

			{isAuth && (
				<PostCommentForm
					isForModal={isForModal}
					post_id={post_id}
				></PostCommentForm>
			)}
		</div>
	)
}

export default React.memo(PostComments)
