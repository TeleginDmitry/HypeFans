import CommentAction from 'components/shared/actions/commentAction/CommentAction'
import LikeAction from 'components/shared/actions/likeAction/LikeAction'
import { PostService } from 'services/post/Post.service'
import { Bookmark } from 'icons-hypefans-lib'
import React from 'react'

import styles from './PostActions.module.scss'

interface IPostActions {
  handlerClickComment: () => void
  comments: number
  isLiked: boolean
  post_id: number
  likes: number
}

const PostActions = ({
  handlerClickComment,
  comments,
  post_id,
  isLiked,
  likes
}: IPostActions) => {
  async function createLike() {
    const response = await PostService.createLike(post_id)
    return response.data
  }

  async function deleteLike() {
    const response = await PostService.deleteLike(post_id)
    return response.data
  }

  return (
    <div className={styles.wrapper}>
      <LikeAction
        onCreate={createLike}
        onDelete={deleteLike}
        isLiked={isLiked}
        likes={likes}
      ></LikeAction>
      <CommentAction
        onClick={handlerClickComment}
        comments={comments}
      ></CommentAction>
      <Bookmark></Bookmark>
    </div>
  )
}

export default PostActions
