import { useQueryClient, useMutation } from '@tanstack/react-query'
import { PostService } from 'services/post/Post.service'
import { COMMENTS_KEY } from 'configs/index.config'
import { Trash } from 'icons-hypefans-lib'

interface IDeleteAction {
  post_id: number
  comment: number
}

const DeleteAction = ({ comment, post_id }: IDeleteAction) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(async () => {
    const response = await PostService.deleteComment(comment)

    if (response.status === 204) {
      queryClient.prefetchInfiniteQuery([COMMENTS_KEY, post_id])
    }
    return response.data
  })

  return <Trash onClick={() => mutate()} size={'small'}></Trash>
}

export default DeleteAction
