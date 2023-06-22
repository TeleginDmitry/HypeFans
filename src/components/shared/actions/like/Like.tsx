import { ReactComponent as LikeSvg } from '@assets/images/post/like.svg'
import { MutationFunction, useMutation } from '@tanstack/react-query'
import { actionsStyles } from 'utils/actionsStyles/ActionsStyles'
import { useTypedSelector } from 'hooks/useTypedSelector'
import cn from '@utils/classNames/classNames'
import React, { useState } from 'react'

import { IActionsVariablesSize } from '../actionsVariables.interface'
import styles from './Like.module.scss'

interface ILike extends IActionsVariablesSize {
  onDelete: MutationFunction<unknown, void>
  onCreate: MutationFunction<unknown, void>
  isLiked: boolean
  likes: number
}

const Like = ({
  size = 'medium',
  onDelete,
  onCreate,
  isLiked,
  likes
}: ILike) => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth)

  const [likesState, setLikes] = useState(likes)
  const [isLikedState, setIsLiked] = useState(isLiked)

  const { isLoading: createLoading, mutate: createLike } = useMutation(
    onCreate,
    {
      onSuccess: () => {
        setIsLiked((state) => !state)
        setLikes((state) => (state += 1))
      }
    }
  )

  const { isLoading: deleteLoading, mutate: deleteLike } = useMutation(
    onDelete,
    {
      onSuccess: () => {
        setIsLiked((state) => !state)
        setLikes((state) => (state -= 1))
      }
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
