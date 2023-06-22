import { POST_MODAL_KEY, POST_PARAM } from 'configs/index.config'
import { PostService } from 'services/post/Post.service'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Modal from 'components/ui/modal/Modal'
import React from 'react'

import PostModalHeader from './postModalHeader/PostModalHeader'
import PostItem from '../../post/postItem/PostItem'
import styles from './PostModal.module.scss'

interface IPostModal {}

const PostModal = ({}: IPostModal) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const post_id = searchParams.get(POST_PARAM)

  const { data: post } = useQuery({
    queryFn: async () => {
      const response = await PostService.getPost(post_id)
      return response.data
    },
    queryKey: [POST_MODAL_KEY, post_id],
    enabled: !!post_id
  })

  function handlerClosePost() {
    searchParams.delete(POST_PARAM)
    setSearchParams(searchParams)
  }

  if (!post) return null

  const { user, id } = post

  return (
    <Modal handlerClose={handlerClosePost}>
      <div className={styles.wrapper}>
        <PostModalHeader
          handlerClose={handlerClosePost}
          post_id={id}
          user={user}
        ></PostModalHeader>
        <PostItem post={post}></PostItem>
      </div>
    </Modal>
  )
}

export default PostModal
