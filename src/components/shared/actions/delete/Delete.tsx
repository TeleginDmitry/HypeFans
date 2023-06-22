import { ReactComponent as DeleteSvg } from '@assets/images/post/delete.svg'
import { MutationFunction, useMutation } from '@tanstack/react-query'
import { actionsStyles } from 'utils/actionsStyles/ActionsStyles'
import { useTypedSelector } from 'hooks/useTypedSelector'
import React from 'react'

import { IActionsVariablesSize } from '../actionsVariables.interface'
import styles from './Delete.module.scss'

interface IDelete extends IActionsVariablesSize {
  onDelete: MutationFunction<unknown, void>
  user_id: number
}

const Delete = ({ size = 'medium', onDelete, user_id }: IDelete) => {
  const { isAuth, user } = useTypedSelector((state) => state.auth)

  const { isLoading: deleteLoading, mutate: deleteMutation } =
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
          className={styles.delete}
          onClick={deleteFunction}
        ></DeleteSvg>
      )}
    </>
  )
}

export default Delete
