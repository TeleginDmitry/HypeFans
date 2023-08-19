import BookmarkAction from 'components/shared/actions/bookmarkAction/BookmarkAction'
import CommentAction from 'components/shared/actions/commentAction/CommentAction'
import LikeAction from 'components/shared/actions/likeAction/LikeAction'
import { PostService } from 'services/post/Post.service'

import styles from './SearchPostItemActions.module.scss'

interface ISearchPostItemActions {
  handlerClickComment: () => void
  comments: number
  isLiked: boolean
  post_id: number
  likes: number
}

const SearchPostItemActions = ({
  handlerClickComment,
  comments,
  post_id,
  isLiked,
  likes
}: ISearchPostItemActions) => {
  async function createLike() {
    const response = await PostService.createLike(post_id)
    return response.data
  }

  async function deleteLike() {
    const response = await PostService.deleteLike(post_id)
    return response.data
  }

  return (
    <div className={styles.wrapper}>
      <LikeAction
        onDelete={deleteLike}
        onCreate={createLike}
        strokeWidth={1.5}
        isLiked={isLiked}
        likes={likes}
      ></LikeAction>
      <CommentAction
        onClick={handlerClickComment}
        comments={comments}
        strokeWidth={1.5}
      ></CommentAction>
      <BookmarkAction strokeWidth={1.5}></BookmarkAction>
    </div>
  )
}

export default SearchPostItemActions
