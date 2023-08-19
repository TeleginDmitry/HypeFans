import { POST_MODAL_KEY, POST_PARAM } from 'configs/index.config'
import { PostService } from 'services/post/Post.service'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Modal from 'components/ui/modal/Modal'

import PostModalHeader from './postModalHeader/PostModalHeader'
import PostItem from '../../post/postItem/PostItem'
import styles from './PostModal.module.scss'

const PostModal = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const post_id = searchParams.get(POST_PARAM)

  const { data: post, isError } = useQuery({
    queryFn: async () => {
      const response = await PostService.getPost(post_id)
      return response.data
    },
    queryKey: [POST_MODAL_KEY, post_id],
    enabled: !!post_id
  })

  function handlerClose() {
    searchParams.delete(POST_PARAM)
    setSearchParams(searchParams)
  }

  if (!post_id) return null

  if (isError) handlerClose()

  if (!post) return null

  const { user, id } = post

  return (
    <Modal handlerClose={handlerClose}>
      <div className={styles.wrapper}>
        <PostModalHeader
          handlerClose={handlerClose}
          post_id={id}
          user={user}
        ></PostModalHeader>
        <PostItem post={post}></PostItem>
      </div>
    </Modal>
  )
}

export default PostModal
