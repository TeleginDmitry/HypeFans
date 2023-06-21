import React from 'react'
import { ReactComponent as DeleteSvg } from '@assets/images/post/delete.svg'
import { MutationFunction, useMutation } from '@tanstack/react-query'
import styles from './Delete.module.scss'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { IActionsVariablesSize } from '../actionsVariables.interface'
import { actionsStyles } from 'utils/actionsStyles/ActionsStyles'

interface IDelete extends IActionsVariablesSize {
	onDelete: MutationFunction<unknown, void>
	user_id: number
}

const Delete = ({ onDelete, user_id, size = 'medium' }: IDelete) => {
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
				<DeleteSvg
					style={actionsStyles({ size })}
					onClick={deleteFunction}
					className={styles.delete}
				></DeleteSvg>
			)}
		</>
	)
}

export default Delete
