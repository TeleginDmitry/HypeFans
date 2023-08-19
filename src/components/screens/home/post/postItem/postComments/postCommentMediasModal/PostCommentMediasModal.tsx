import { COMMENT_PARAM, MEDIA_PARAM } from 'configs/index.config'
import { PostService } from 'services/post/Post.service'
import { useSearchParams } from 'react-router-dom'
import Modal from 'components/ui/modal/Modal'
import useFetching from 'hooks/useFetching'
import { useEffect } from 'react'

import styles from './PostCommentMediasModal.module.scss'
import MediasList from './mediasList/MediasList'

const PostCommentMediasModal = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const comment = searchParams.get(COMMENT_PARAM)
  const media = searchParams.get(MEDIA_PARAM)

  const { fetchQuery, isError, data } = useFetching({
    callback: async () => {
      const response = await PostService.getCommentMedias(+comment)

      return response.data
    },
    condition: !!comment && !!media
  })

  function handlerClose() {
    searchParams.delete(MEDIA_PARAM)
    searchParams.delete(COMMENT_PARAM)
    setSearchParams(searchParams)
  }

  useEffect(() => {
    fetchQuery()
  }, [comment])

  if (!comment && !media) return null

  if (!data?.length) return null

  if (isError) handlerClose()

  return (
    <Modal handlerClose={handlerClose}>
      <div className={styles.wrapper}>
        <MediasList medias={data}></MediasList>
      </div>
    </Modal>
  )
}

export default PostCommentMediasModal
