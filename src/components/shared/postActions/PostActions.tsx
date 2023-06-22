import { PostService } from 'services/post/Post.service'
import React from 'react'

import Bookmark from '../actions/bookmark/Bookmark'
import Comment from '../actions/comment/Comment'
import styles from './PostActions.module.scss'
import Like from '../actions/like/Like'

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
      <Like
        onCreate={createLike}
        onDelete={deleteLike}
        isLiked={isLiked}
        likes={likes}
      ></Like>
      <Comment onClick={handlerClickComment} comments={comments}></Comment>
      <Bookmark></Bookmark>
    </div>
  )
}

export default PostActions
