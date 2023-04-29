import React, { useState } from 'react'
import styles from './PostSvgActions.module.scss'
import { ReactComponent as Like } from '@assets/images/post/like.svg'
import { ReactComponent as Comment } from '@assets/images/post/comments.svg'
import { ReactComponent as Bookmark } from '@assets/images/post/bookmark.svg'
import { classNames as cn } from 'utils/classNames/classNames'
import { useFetching } from 'hooks/useFetching'
import { PostService } from 'services/post/Post.service'
import { useTypedSelector } from 'hooks/useTypedSelector'
import Icon from 'components/shared/icon/Icon'

interface IPostSvgActions {
	isLiked: boolean
	post_id: number
	handlerClickComment: () => void
	likes: number
	comments: number
	setLikes: React.Dispatch<React.SetStateAction<number>>
}

const PostSvgActions = ({
	likes,
	comments,
	setLikes,
	isLiked,
	post_id,
	handlerClickComment,
}: IPostSvgActions) => {
	const [isLikedState, setIsLiked] = useState(isLiked)

	const isAuth = useTypedSelector(state => state.auth.isAuth)

	const { fetchQuery } = useFetching(async isLiked => {
		if (isLiked) return await PostService.deleteLike(post_id)
		return await PostService.createLike(post_id)
	})

	function changeLikeState() {
		setIsLiked(state => (state = !state))
	}

	async function handlerClickLike() {
		if (isAuth) {
			const response = await fetchQuery(isLikedState)
			if (response?.status === 201) {
				changeLikeState()
				setLikes(state => (state += 1))
			} else if (response?.status === 204) {
				changeLikeState()
				setLikes(state => (state -= 1))
			}
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.actions}>
				<div className={styles.action__item}>
					<Like
						onClick={handlerClickLike}
						className={
							isLikedState
								? cn([styles.action__svg, styles.liked])
								: styles.action__svg
						}
					></Like>
					<span className={styles.action__count}>{likes}</span>
				</div>
				<div className={styles.action__item}>
					<Icon src='comments.svg'></Icon>
					{/* <Comment
						onClick={handlerClickComment}
						className={styles.action__svg}
					></Comment> */}
					<span className={styles.action__count}>{comments}</span>
				</div>
				<div className={styles.action__item}>
					<Bookmark className={styles.action__svg}></Bookmark>
				</div>
			</div>
			<div className={styles.views}>
				<span className={styles.view}></span>
			</div>
		</div>
	)
}

export default PostSvgActions
