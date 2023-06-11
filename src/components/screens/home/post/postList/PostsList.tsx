import { Fragment } from 'react'
import styles from './PostsList.module.scss'
import PostItem from '../postItem/PostItem'
import { IPost } from 'shared/interfaces/post.interface'
import { PostService } from 'services/post/Post.service'
import PostsLoader from '@ui/postsLoader/PostsLoader'
import usePagination from 'hooks/usePagination'
import { POSTS_LIMIT, POST_LIST_KEY } from 'configs/index.config'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

interface IPostsList {
	user_id?: number | string
}

export default function PostsList({ user_id }: IPostsList) {
	const {
		data: postsList,
		isLoading,
		fetchNextPage,
		hasNextPage,
		isFetching,
	} = usePagination<IPost>({
		queryKey: POST_LIST_KEY,
		queryFn: async ({ pageParam = 0 }) => {
			const params = {
				limit: POSTS_LIMIT,
				offset: pageParam,
				user_id,
			}
			const response = await PostService.getPosts(params)
			return response.data
		},
	})

	const { ref, inView } = useInView({
		skip: !hasNextPage,
		rootMargin: '0px 0px 200px 0px',
	})

	useEffect(() => {
		if (inView) {
			fetchNextPage()
		}
	}, [inView])

	return (
		<div className={styles.posts__list}>
			{postsList.map(({ results }, index) => (
				<Fragment key={index}>
					{results.map(post => {
						return <PostItem key={post.id} post={post}></PostItem>
					})}
				</Fragment>
			))}
			<div className={styles.posts__observer} ref={ref}></div>
			{isLoading && <PostsLoader />}

			{!isLoading && !postsList.length && (
				<h2 className={styles.title__exist}>
					У пользователя не существует ни одного поста!
				</h2>
			)}
		</div>
	)
}
