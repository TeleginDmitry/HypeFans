import React from 'react'
import { MutationFunction, useMutation } from '@tanstack/react-query'
import styles from './Delete.module.scss'
import { useTypedSelector } from 'hooks/useTypedSelector'

interface IDelete {
	onDelete: MutationFunction<unknown, void>
	user_id: number
}

const Delete = ({ onDelete, user_id }: IDelete) => {
	const { isAuth, user } = useTypedSelector(state => state.auth)

	const { mutate: deleteMutation, isLoading: deleteLoading } =
		useMutation(onDelete)

	function deleteFunction() {
		if (!isAuth && !deleteLoading) return

		deleteMutation()
	}

	return (
		<>
			{isAuth && user.id === user_id && (
				<span onClick={deleteFunction} className={styles.action}>
					удалить
				</span>
			)}
		</>
	)
}

export default Delete
