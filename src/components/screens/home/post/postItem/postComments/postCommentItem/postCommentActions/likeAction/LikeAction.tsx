import LikeActionComponent from 'components/shared/actions/likeAction/LikeAction'
import { PostService } from 'services/post/Post.service'

interface ILikeAction {
  isLiked: boolean
  comment: number
  likes: number
}

const LikeAction = ({ comment, isLiked, likes }: ILikeAction) => {
  async function createLike() {
    const data = {
      comment
    }
    PostService.createCommentLike(data)
  }

  async function deleteLike() {
    const data = {
      comment
    }

    const response = await PostService.deleteCommentLike(data)
    return response.data
  }

  return (
    <LikeActionComponent
      onCreate={createLike}
      onDelete={deleteLike}
      isLiked={isLiked}
      likes={likes}
      size='small'
    ></LikeActionComponent>
  )
}

export default LikeAction
