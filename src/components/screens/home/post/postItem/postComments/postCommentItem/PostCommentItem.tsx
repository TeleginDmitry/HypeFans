import { IPostComment } from 'shared/interfaces/post.interface'
import { useTypedSelector } from 'hooks/useTypedSelector'
import Avatar from 'components/ui/avatars/avatar/Avatar'
import { USER_PAGE } from 'configs/index.config'
import { API_URL } from '@configs/api.config'
import { useState } from 'react'

import PostCommentItemContent from './postCommentItemContent/PostCommentItemContent'
import PostCommentActions from './postCommentActions/PostCommentActions'
import PostCommentForm from '../postCommentForm/PostCommentForm'
import styles from './PostCommentItem.module.scss'

interface IPostCommentItem {
  comment: IPostComment
}

const PostCommentItem = ({ comment }: IPostCommentItem) => {
  const { date_joined, isLiked, likes, post, user, text, id } = comment

  const [isOpenInput, setOpenInput] = useState(false)

  const myId = useTypedSelector((state) => state.auth.user?.id)

  function onClickComment() {
    setOpenInput((state) => !state)
  }

  return (
    <div className={styles.wrapper}>
      <Avatar
        to={`/${USER_PAGE}/${user.id}`}
        avatar={API_URL + user.avatar}
        size='low'
      ></Avatar>

      <div className={styles.container}>
        <div className={styles.content} onClick={onClickComment}>
          <PostCommentItemContent
            date_joined={date_joined}
            username={user.username}
            description={text}
            id={user.id}
          ></PostCommentItemContent>
          <div className={styles.postActions__container}>
            <PostCommentActions
              isLiked={isLiked}
              post_id={post}
              likes={likes}
              comment={id}
              user={user}
            ></PostCommentActions>
          </div>
        </div>

        {isOpenInput && myId !== user.id && (
          <div className={styles.postCommentForm}>
            <PostCommentForm post_id={post} size='low'></PostCommentForm>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostCommentItem
