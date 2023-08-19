import { ComponentWithAuthorized } from 'hocs/ComponentWithAuthorized'
import ComponentWithEqualUser from 'hocs/ComponentWithEqualUser'
import { IPostComment } from 'shared/interfaces/post.interface'
import Avatar from 'components/ui/avatars/avatar/Avatar'
import { USER_PAGE } from 'configs/index.config'
import { API_URL } from '@configs/api.config'
import cn from 'utils/classNames/classNames'
import { useRef } from 'react'

import PostCommentItemContent from './postCommentItemContent/PostCommentItemContent'
import PostCommentItemReply from './postCommentItemReply/PostCommentItemReply'
import PostCommentActions from './postCommentActions/PostCommentActions'
import PostCommentMedias from './postCommentMedias/PostCommentMedias'
import PostCommentForm from '../postCommentForm/PostCommentForm'
import styles from './PostCommentItem.module.scss'

interface IPostCommentItem {
  comment: IPostComment
  isReply?: boolean
}

const PostCommentItem = ({ comment, isReply }: IPostCommentItem) => {
  const { date_joined, isLiked, medias, likes, reply, post, user, text, id } =
    comment

  const formContainer = useRef<HTMLDivElement>(null)

  function onClickComment() {
    const formContainers = document.querySelectorAll(
      '.' + styles.form__container
    )

    formContainers.forEach((item) => {
      item.classList.remove(styles.form__active)
    })

    if (formContainer.current) {
      formContainer.current.classList.toggle(styles.form__active)
    }
  }

  return (
    <div className={cn([styles.wrapper], [isReply, styles.reply])}>
      <div className={styles.container}>
        <Avatar
          to={`/${USER_PAGE}/${user.id}`}
          src={API_URL + user.avatar}
          size='low'
        ></Avatar>

        <div className={styles.content}>
          <div className={styles.block} onClick={onClickComment}>
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

          {!!reply && (
            <PostCommentItemReply reply={reply}></PostCommentItemReply>
          )}
        </div>
      </div>

      <PostCommentMedias
        user_id={user.id}
        comment_id={id}
        medias={medias}
        post_id={post}
      ></PostCommentMedias>
      <ComponentWithAuthorized>
        <ComponentWithEqualUser user={user.id}>
          <div className={styles.form__container} ref={formContainer}>
            <PostCommentForm
              username={user.username}
              post_id={post}
              reply_id={id}
              size='small'
            ></PostCommentForm>
          </div>
        </ComponentWithEqualUser>
      </ComponentWithAuthorized>
    </div>
  )
}

export default PostCommentItem
