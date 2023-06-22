import PostActions from 'components/shared/postActions/PostActions'
import PostHeader from 'components/shared/postHeader/PostHeader'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { IPost } from 'shared/interfaces/post.interface'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import PostCommentForm from './postComments/postCommentForm/PostCommentForm'
import PostComments from './postComments/PostComments'
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
      // initial={{ opacity: 0 }}
      // viewport={{ once: true }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 0.5 }}
      className={styles.wrapper}
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
          countComments={comments}
          post_id={id}
        ></PostComments>
        {isShowForm && <PostCommentForm post_id={id}></PostCommentForm>}
      </div>
    </motion.div>
  )
}
