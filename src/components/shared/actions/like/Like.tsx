import React, { useState } from 'react'
import { ReactComponent as LikeSvg } from '@assets/images/post/like.svg'
import styles from './Like.module.scss'
import cn from '@utils/classNames/classNames'
import { MutationFunction, useMutation } from '@tanstack/react-query'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { IActionsVariablesSize } from '../actionsVariables.interface'
import { actionsStyles } from 'utils/actionsStyles/ActionsStyles'

interface ILike extends IActionsVariablesSize {
	likes: number
	isLiked: boolean
	onCreate: MutationFunction<unknown, void>
	onDelete: MutationFunction<unknown, void>
}

const Like = ({
	isLiked,
	likes,
	onCreate,
	onDelete,
	size = 'medium',
}: ILike) => {
	const isAuth = useTypedSelector(state => state.auth.isAuth)

	const [likesState, setLikes] = useState(likes)
	const [isLikedState, setIsLiked] = useState(isLiked)

	const { mutate: createLike, isLoading: createLoading } = useMutation(
		onCreate,
		{
			onSuccess: () => {
				setIsLiked(state => !state)
				setLikes(state => (state += 1))
			},
		}
	)

	const { mutate: deleteLike, isLoading: deleteLoading } = useMutation(
		onDelete,
		{
			onSuccess: () => {
				setIsLiked(state => !state)
				setLikes(state => (state -= 1))
			},
		}
	)

	function handlerClickLike() {
		if (!isAuth || createLoading || deleteLoading) return

		if (isLikedState) return deleteLike()
		return createLike()
	}

	return (
		<div onClick={handlerClickLike} className={styles.wrapper}>
			<LikeSvg
				className={cn([styles.like], [isLikedState, styles.liked])}
				style={actionsStyles({ size })}
			></LikeSvg>
			<span className={styles.count}>{likesState}</span>
		</div>
	)
}

export default Like
