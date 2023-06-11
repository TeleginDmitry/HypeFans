import React, { Fragment } from 'react'
import styles from './PostCommentList.module.scss'
import { IPostComment } from 'shared/interfaces/post.interface'
import PostCommentItem from '../postCommentItem/PostCommentItem'
import { IPagination } from 'shared/interfaces/pagination.interface'

interface IPostCommentList {
	paginatedComments: IPagination<IPostComment[]>[]
}

const PostCommentList = ({ paginatedComments }: IPostCommentList) => {
	if (!paginatedComments.length) return null
	return (
		<div className={styles.wrapper}>
			<div className={styles.comments}>
				{paginatedComments.map(({ results }, index) => {
					return (
						<Fragment key={index}>
							{results.map(comment => {
								return (
									<PostCommentItem
										key={comment.id}
										comment={comment}
									></PostCommentItem>
								)
							})}
						</Fragment>
					)
				})}
			</div>
		</div>
	)
}

export default PostCommentList
