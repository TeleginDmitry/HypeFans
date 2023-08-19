import ObserverElement from 'components/shared/observerElement/ObserverElement'
import { POST_LIST_KEY, POSTS_LIMIT } from 'configs/index.config'
import ErrorText from 'components/ui/errorText/ErrorText'
import { IPost } from 'shared/interfaces/post.interface'
import { PostService } from 'services/post/Post.service'
import PostsLoader from '@ui/postsLoader/PostsLoader'
import usePagination from 'hooks/usePagination'

import PostModal from '../postModal/PostModal'
import styles from './PostsList.module.scss'
import PostItem from '../postItem/PostItem'

interface IPostsList {
  user_id?: number | string
}

export default function PostsList({ user_id }: IPostsList) {
  const {
    data: postsList,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError
  } = usePagination<IPost>({
    queryFn: async ({ pageParam = 0 }) => {
      const params = {
        limit: POSTS_LIMIT,
        offset: pageParam,
        user_id
      }
      const response = await PostService.getPosts(params)
      return response.data
    },
    queryKey: POST_LIST_KEY
  })

  if (isError)
    return <ErrorText>При загрузке постов, произошла ошибка!</ErrorText>

  return (
    <div className={styles.wrapper}>
      {postsList.map((post) => {
        return <PostItem key={post.id} post={post}></PostItem>
      })}
      <ObserverElement
        rootMargin={'0px 0px 200px 0px'}
        onVisible={fetchNextPage}
        skip={!hasNextPage}
      ></ObserverElement>
      {isLoading && <PostsLoader />}

      {!isLoading && !postsList.length && (
        <h2 className={styles.title__exist}>
          У пользователя не существует ни одного поста!
        </h2>
      )}

      <PostModal></PostModal>
    </div>
  )
}
