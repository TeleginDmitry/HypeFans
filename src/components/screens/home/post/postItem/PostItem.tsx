import PostHeader from 'components/shared/postHeader/PostHeader'
import { IPost } from 'shared/interfaces/post.interface'
import { motion } from 'framer-motion'
import React from 'react'

import PostCommentFormLayout from './postCommentFormLayout/PostCommentFormLayout'
import PostComments from './postComments/PostComments'
import PostContent from './postContent/PostContent'
import PostActions from './postActions/PostActions'
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
            comments={comments}
            isLiked={isLiked}
            likes={likes}
            post_id={id}
          ></PostActions>
        </div>

        <PostComments lastComment={lastComment} post_id={id}></PostComments>
        <PostCommentFormLayout post_id={id}></PostCommentFormLayout>
      </div>
    </motion.div>
  )
}
