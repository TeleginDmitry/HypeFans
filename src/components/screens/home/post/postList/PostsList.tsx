import { useRef } from 'react'
import styles from './PostsList.module.scss'
import PostItem from '../postItem/PostItem'
import Loader from '@ui/loader/Loader'
import useInfinityQuery from 'hooks/useInfinityQuery'
import { IPagination } from 'shared/interfaces/pagination.interface'
import { IPost } from 'shared/interfaces/post.interface'
import { PostService } from 'services/post/Post.service'
import PostsLoader from 'components/shared/postsLoader/PostsLoader'
import usePagination from 'hooks/usePagination'
import { useObserver } from 'hooks/useObserver'

interface IPostsList {
	user_id?: number | string
}

export default function PostsList({ user_id }: IPostsList) {
	const observer = useRef(null)

	const {
		data: postList,
		isLoading,
		handlerOffset,
		hasNextPage,
	} = usePagination<IPost>({
		initialLimit: 3,
		queryFunc: async (params): Promise<IPagination<IPost[]>> => {
			const response = await PostService.getPosts(params)
			return response.data
		},
		isInfinity: true,
		queryKey: 'posts',
		queryParam: { user_id },
	})


	useObserver({
		element: observer,
		callback: handlerOffset,
		isLoading,
		condition: hasNextPage,
		observerParams: { rootMargin: '0px 0px 500px 0px' },
	})

	return (
		<div className={styles.posts__list}>
			{postList?.map(post => {
				return <PostItem key={post.id} {...post}></PostItem>
			})}
			<div className={styles.posts__observer} ref={observer}></div>
			{isLoading && (
				<>
					<Loader></Loader>
					<PostsLoader />
				</>
			)}

			{!isLoading && !postList?.length && (
				<h2 className={styles.title__exist}>
					У пользователя не существует ни одного поста!
				</h2>
			)}
		</div>
	)
}
