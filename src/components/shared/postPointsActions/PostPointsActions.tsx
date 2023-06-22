import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useCopyToClipboard } from 'hooks/useCopyToClipboard'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { PostService } from 'services/post/Post.service'
import React from 'react'

import styles from './PostPointsActions.module.scss'

interface IPostPointsActions {
  user_id?: number
  post_id: number
}

const PostPointsActions = ({ user_id = null, post_id }: IPostPointsActions) => {
  const my_user_id = useTypedSelector((state) => state.auth?.user?.id)

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
      }
    }
  )

  const liItems = [
    {
      onClick: () => {
        const link = window.location.origin + `/?post=${post_id}`
        copy(link)
      },
      title: 'Копировать ссылку',
      condition: true,
      id: 1
    },
    {
      title: 'Спрятать из ленты',
      condition: true,
      id: 2
    },
    {
      onClick: async () => {
        mutate(post_id)
      },
      condition: user_id === my_user_id,
      title: 'Удалить',
      id: 3
    },
    {
      title: 'Пожаловаться',
      condition: true,
      id: 4
    }
  ]

  return (
    <ul className={styles.actions}>
      {liItems.map((item) => {
        const { condition, title, id, ...props } = item
        return (
          condition && (
            <li className={styles.action} key={id} {...props}>
              {title}
            </li>
          )
        )
      })}
    </ul>
  )
}

export default PostPointsActions
