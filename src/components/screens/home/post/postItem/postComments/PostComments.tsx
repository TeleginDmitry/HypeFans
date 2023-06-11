import React from 'react'
import styles from './PostComments.module.scss'
import { PostService } from 'services/post/Post.service'
import { IPostComment } from 'shared/interfaces/post.interface'
import PostCommentList from './postCommentList/PostCommentList'
import usePagination from 'hooks/usePagination'
import PostCommentItem from './postCommentItem/PostCommentItem'
import Loader from 'components/ui/loader/Loader'
import { COMMENTS_KEY } from 'configs/index.config'

interface IPostComments {
	post_id: number
	countComments: number
	lastComment: IPostComment | null
}

const PostComments = ({
	post_id,
	lastComment,
	countComments,
}: IPostComments) => {
	const {
		data: paginatedComments,
		fetchNextPage,
		hasNextPage,
		isFetching,
	} = usePagination<IPostComment>({
		queryKey: [COMMENTS_KEY, post_id],
		queryFn: async ({ pageParam = 0 }) => {
			const params = {
				post_id,
			}

			if (pageParam) {
				params['cursor'] = pageParam
			}

			const response = await PostService.getComments(params)
			return response.data
		},
		enabled: false,
		nameParam: 'cursor',
		cacheTime: Infinity,
		refetchOnWindowFocus: true,
	})

	function showNextPage() {
		fetchNextPage()
	}

	const isHasNextPage =
		hasNextPage ||
		(!!lastComment && countComments > paginatedComments.length * 2 + 1)

	if (!lastComment && !paginatedComments.length) return null

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.comments}>
					<PostCommentList
						paginatedComments={paginatedComments}
					></PostCommentList>

					{lastComment && !paginatedComments.length && (
						<PostCommentItem comment={lastComment}></PostCommentItem>
					)}
				</div>
				{isFetching && <Loader></Loader>}

				{isHasNextPage && (
					<button className={styles.show__comments} onClick={showNextPage}>
						Показать следующие комментарии
					</button>
				)}
			</div>
		</div>
	)
}

export default React.memo(PostComments)
