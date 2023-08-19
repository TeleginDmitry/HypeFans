import { useQueryClient, useMutation } from '@tanstack/react-query'
import { PostService } from 'services/post/Post.service'
import { COMMENTS_KEY } from 'configs/index.config'
import { Pencil } from 'icons-hypefans-lib'

interface IEditAction {
  post_id: number
  comment: number
}

const EditAction = ({ comment, post_id }: IEditAction) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(async () => {
    const response = await PostService.deleteComment(comment)

    if (response.status === 204) {
      queryClient.prefetchInfiniteQuery([COMMENTS_KEY, post_id])
    }
    return response.data
  })

  return <Pencil onClick={() => mutate()} size={'small'}></Pencil>
}

export default EditAction
