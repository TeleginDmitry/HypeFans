import React from 'react'
import styles from './PostPointsActions.module.scss'
import { useCopyToClipboard } from 'hooks/useCopyToClipboard'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { PostService } from 'services/post/Post.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface IPostPointsActions {
	post_id: number
	user_id?: number
}

const PostPointsActions = ({ post_id, user_id = null }: IPostPointsActions) => {
	const my_user_id = useTypedSelector(state => state.auth?.user?.id)

	const queryClient = useQueryClient()

	const { copy } = useCopyToClipboard()

	const { mutate } = useMutation(
		async (post_id: number) => {
			const response = await PostService.deletePost(post_id)
			return response.data
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['posts'])
			},
		}
	)

	const liItems = [
		{
			id: 1,
			title: 'Копировать ссылку',
			condition: true,
			onClick: () => {
				const link = window.location.origin + `/?post=${post_id}`
				copy(link)
			},
		},
		{
			id: 2,
			title: 'Спрятать из ленты',
			condition: true,
		},
		{
			id: 3,
			title: 'Удалить',
			condition: user_id === my_user_id,
			onClick: async () => {
				mutate(post_id)
			},
		},
		{
			id: 4,
			title: 'Пожаловаться',
			condition: true,
		},
	]

	return (
		<ul className={styles.actions}>
			{liItems.map(item => {
				const { condition, id, title, ...props } = item
				return (
					condition && (
						<li key={id} className={styles.action} {...props}>
							{title}
						</li>
					)
				)
			})}
		</ul>
	)
}

export default PostPointsActions
