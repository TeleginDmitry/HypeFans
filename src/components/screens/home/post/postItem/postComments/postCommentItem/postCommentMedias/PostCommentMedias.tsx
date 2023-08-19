import { COMMENT_PARAM, COMMENTS_KEY, MEDIA_PARAM } from 'configs/index.config'
import ComponentWithEqualUser from 'hocs/ComponentWithEqualUser'
import { ICommentMedia } from 'shared/interfaces/post.interface'
import { PostService } from 'services/post/Post.service'
import { useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import Media from 'components/shared/media/Media'
import { SERVER_URL } from 'configs/api.config'
import { CirclePlus } from 'icons-hypefans-lib'
import useFetching from 'hooks/useFetching'

import styles from './PostCommentMedias.module.scss'

interface IPostCommentMedias {
  medias: ICommentMedia[]
  comment_id: number
  post_id: number
  user_id: number
}

const PostCommentMedias = ({
  comment_id,
  user_id,
  post_id,
  medias
}: IPostCommentMedias) => {
  if (!medias.length) return null

  const [searchParams, setSearchParams] = useSearchParams()

  const queryClient = useQueryClient()

  const { fetchQuery } = useFetching<void>({
    callback: async (id: number) => {
      const response = await PostService.deleteCommentMedia(id)
      return response.data
    },
    onSuccess: () => {
      queryClient.prefetchInfiniteQuery([COMMENTS_KEY, post_id])
    }
  })

  function onClickMedia(media_id: number) {
    searchParams.set(MEDIA_PARAM, media_id.toString())
    searchParams.set(COMMENT_PARAM, comment_id.toString())

    setSearchParams(searchParams)
  }

  return (
    <ul className={styles.list}>
      {medias.map(({ media, type, id }) => {
        return (
          <li className={styles.item} key={id}>
            <Media
              videoProps={{
                onClick: () => onClickMedia(id),
                className: styles.media
              }}
              imageProps={{
                onClick: () => onClickMedia(id),
                className: styles.media
              }}
              src={SERVER_URL + media.slice(1)}
              type={type}
            ></Media>

            <ComponentWithEqualUser user={user_id}>
              <CirclePlus
                onClick={() => fetchQuery(id)}
                className={styles.delete}
                title='Удалить'
              ></CirclePlus>
            </ComponentWithEqualUser>
          </li>
        )
      })}
    </ul>
  )
}

export default PostCommentMedias
