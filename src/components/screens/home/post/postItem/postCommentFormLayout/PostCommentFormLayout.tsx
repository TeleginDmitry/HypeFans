import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

import PostCommentForm from '../postComments/postCommentForm/PostCommentForm'
import styles from './PostCommentFormLayout.module.scss'

interface IPostCommentFormLayout {
  post_id: number
}

const PostCommentFormLayout = ({ post_id }: IPostCommentFormLayout) => {
  const [isShowForm, setShowForm] = useState(false)

  const { inView, ref } = useInView()

  useEffect(() => {
    let timeout

    function defineTimeout() {
      timeout = setTimeout(() => {
        setShowForm((state) => !state)
      }, 15000)
    }

    if (inView && !isShowForm) defineTimeout()
    else {
      clearTimeout(timeout)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [inView, isShowForm])

  return isShowForm ? (
    <div className={styles.wrapper}>
      <PostCommentForm post_id={post_id} size='large'></PostCommentForm>
    </div>
  ) : (
    <div ref={ref}></div>
  )
}

export default PostCommentFormLayout
