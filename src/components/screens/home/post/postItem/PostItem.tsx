import PostHeader from 'components/shared/postHeader/PostHeader'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { IPost } from 'shared/interfaces/post.interface'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import PostCommentForm from './postComments/postCommentForm/PostCommentForm'
import PostComments from './postComments/PostComments'
import PostActions from './postActions/PostActions'
import PostContent from './postContent/PostContent'
import styles from './PostItem.module.scss'

interface IPostItem {
  post: IPost
}

export default function PostItem({ post }: IPostItem) {
  const {
    lastComment,
    date_joined,
    description,
    comments,
    isLiked,
    medias,
    likes,
    user,
    id
  } = post

  const isAuth = useTypedSelector((state) => state.auth.isAuth)

  const [isClickComment, setClickComment] = useState(false)

  function handlerClickComment() {
    setClickComment((state) => (state = !state))
  }

  const isShowForm = isAuth && (lastComment || isClickComment)

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      className={styles.wrapper}
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
    >
      <div className={styles.container}>
        <PostHeader
          date_joined={date_joined}
          post_id={id}
          user={user}
        ></PostHeader>
        <PostContent
          description={description}
          medias={medias}
          post_id={id}
        ></PostContent>
        <div className={styles.actions__container}>
          <PostActions
            handlerClickComment={handlerClickComment}
            comments={comments}
            isLiked={isLiked}
            likes={likes}
            post_id={id}
          ></PostActions>
        </div>

        <PostComments
          lastComment={lastComment}
          comments={comments}
          post_id={id}
        ></PostComments>
        {isShowForm && (
          <div className={styles.form__container}>
            <PostCommentForm size='large' post_id={id}></PostCommentForm>
          </div>
        )}
      </div>
    </motion.div>
  )
}
