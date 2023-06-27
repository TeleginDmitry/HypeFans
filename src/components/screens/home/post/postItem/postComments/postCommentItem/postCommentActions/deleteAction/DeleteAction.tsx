import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { PostService } from 'services/post/Post.service'
import { COMMENTS_KEY } from 'configs/index.config'
import { Trash } from 'icons-hypefans-lib'

interface IDeleteAction {
  user_id: number
  post_id: number
  comment: number
}

const DeleteAction = ({ user_id, comment, post_id }: IDeleteAction) => {
  const { isAuth, user } = useTypedSelector((state) => state.auth)

  const queryClient = useQueryClient()

  const { mutate } = useMutation(async () => {
    const response = await PostService.deleteComment(comment)

    if (response.status === 204) {
      queryClient.prefetchInfiniteQuery([COMMENTS_KEY, post_id])
    }
    return response.data
  })

  return (
    <>
      {isAuth && user.id === user_id && (
        <Trash onClick={() => mutate()} size={'small'}></Trash>
      )}
    </>
  )
}

export default DeleteAction
