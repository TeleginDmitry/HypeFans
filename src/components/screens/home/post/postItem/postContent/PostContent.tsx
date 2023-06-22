import { IPostMediaShort } from 'shared/interfaces/post.interface'
import { POST_PARAM } from 'configs/index.config'
import { useNavigate } from 'react-router-dom'
import React, { memo } from 'react'

import PostVariablesImages from './postVariablesImages/PostVariablesImages'
import styles from './PostContent.module.scss'

interface IPostContent {
  medias: IPostMediaShort[]
  description: string
  post_id: number
}

const PostContent = ({ description, post_id, medias }: IPostContent) => {
  const navigate = useNavigate()

  function handlerOpenPostModal() {
    navigate(`/?${POST_PARAM}=${post_id}`)
  }

  return (
    <div className={styles.content}>
      <div
        className={styles.description__container}
        onClick={handlerOpenPostModal}
      >
        <p className={styles.description}>{description}</p>
      </div>
      <PostVariablesImages medias={medias}></PostVariablesImages>
    </div>
  )
}

export default memo(PostContent)
