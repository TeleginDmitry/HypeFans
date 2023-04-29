import React from 'react'
import { IComment } from 'shared/interfaces/post.interface'
import styles from './PostCommentItem.module.scss'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Delete } from '@assets/images/x.svg'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { useFetching } from 'hooks/useFetching'
import { PostService } from 'services/post/Post.service'
import ConvertDate from 'utils/ConvertDate/ConvertDate'
import { API_URL } from 'configs/api.config'

interface IPostCommentItem {
	comment: IComment
	decreaseComments: () => void
}

const PostCommentItem = ({
	comment,
	decreaseComments,
}: IPostCommentItem) => {
	const navigation = useNavigate()

	const meUserId = useTypedSelector(state => state.auth.user?.id)

	const user = comment.user


	const formattedDate = ConvertDate(comment.date_joined)

	const { fetchQuery } = useFetching(async () => {
		const response = await PostService.deleteComment(comment.id)
		decreaseComments()
		return response.data
	})

	function getOverUser() {
		navigation(`/user/${user.id}`, { preventScrollReset: true })
	}

	return (
		<div className={styles.wrapper}>
			<div onClick={getOverUser} className={styles.avatar__container}>
				<img className={styles.avatar} src={API_URL + user.avatar} alt='' />
			</div>
			<div className={styles.content}>
				<h2 onClick={getOverUser} className={styles.username}>
					{user.username}
				</h2>
				<p className={styles.text}>{comment.text}</p>
				<span className={styles.date}>{formattedDate}</span>
			</div>

			{meUserId === user.id && (
				<Delete onClick={fetchQuery} className={styles.delete}></Delete>
			)}
		</div>
	)
}

export default PostCommentItem
