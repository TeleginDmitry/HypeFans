import { MutationFunction, useMutation } from '@tanstack/react-query'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { IconProps, Like } from 'icons-hypefans-lib'
import { useState } from 'react'

import styles from './LikeAction.module.scss'

interface ILikeAction extends IconProps {
  onDelete: MutationFunction<unknown, void>
  onCreate: MutationFunction<unknown, void>
  isLiked: boolean
  likes: number
}

const LikeAction = (props: ILikeAction) => {
  const {
    size = 'medium',
    strokeWidth,
    onCreate,
    onDelete,
    isLiked,
    likes
  } = props

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
      <Like
        className={isLikedState && styles.liked}
        strokeWidth={strokeWidth}
        size={size}
      ></Like>
      <span className={styles.count}>{likesState}</span>
    </div>
  )
}

export default LikeAction
