import PostPointsActions from 'components/shared/postPointsActions/PostPointsActions'
import ShortUserInfo from 'components/shared/shortUserInfo/ShortUserInfo'
import PointsContainer from 'components/shared/postPoints/PostPoints'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { IPostUser } from 'shared/interfaces/post.interface'
import { POST_PARAM, USER_PAGE } from 'configs/index.config'
import React, { memo } from 'react'

import ConvertedDate from '../convertedDate/ConvertedDate'
import styles from './PostHeader.module.scss'

interface IPostHeader {
  date_joined: string
  post_id: number
  user: IPostUser
}

const PostHeader = ({ date_joined, post_id, user }: IPostHeader) => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const postIdParam = searchParams.get(POST_PARAM)

  function navigateToUser() {
    navigate(`/${USER_PAGE}/${user.id}`)
  }

  return (
    <div className={styles.user}>
      <ShortUserInfo
        username={user.username}
        onClick={navigateToUser}
        prefix={user.prefix}
        avatar={user.avatar}
      ></ShortUserInfo>
      <div className={styles.container}>
        <ConvertedDate date={date_joined}></ConvertedDate>
        {postIdParam !== post_id.toString() && (
          <PointsContainer>
            <div className={styles.actions__points}>
              <PostPointsActions
                user_id={user.id}
                post_id={post_id}
              ></PostPointsActions>
            </div>
          </PointsContainer>
        )}
      </div>
    </div>
  )
}

export default memo(PostHeader)
