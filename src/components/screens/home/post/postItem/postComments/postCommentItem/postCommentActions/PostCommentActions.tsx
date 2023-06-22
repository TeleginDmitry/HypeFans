import { IShortUser } from 'shared/interfaces/user.interface'
import Delete from 'components/shared/actions/delete/Delete'
import { PostService } from 'services/post/Post.service'
import { useQueryClient } from '@tanstack/react-query'
import Like from 'components/shared/actions/like/Like'
import { COMMENTS_KEY } from 'configs/index.config'
import React from 'react'

import styles from './PostCommentActions.module.scss'

interface IPostCommentActions {
  isLiked: boolean
  user: IShortUser
  post_id: number
  comment: number
  likes: number
}

const PostCommentActions = (props: IPostCommentActions) => {
  const { isLiked, post_id, comment, likes, user } = props
  const queryClient = useQueryClient()

  async function createLike() {
    const data = {
      comment
    }
    PostService.createCommentLike(data)
  }

  async function deleteLike() {
    const data = {
      comment
    }

    const response = await PostService.deleteCommentLike(data)
    return response.data
  }

  async function deleteComment() {
    const response = await PostService.deleteComment(comment)

    if (response.status === 204) {
      queryClient.prefetchInfiniteQuery([COMMENTS_KEY, post_id])
    }
    return response.data
  }

  return (
    <div className={styles.actions}>
      <Delete onDelete={deleteComment} user_id={user.id} size='low'></Delete>
      <Like
        onCreate={createLike}
        onDelete={deleteLike}
        isLiked={isLiked}
        likes={likes}
        size='low'
      ></Like>
    </div>
  )
}

export default PostCommentActions
