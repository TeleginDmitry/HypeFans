import React, { useEffect } from 'react'
import styles from './PostModal.module.scss'
import useFetching from 'hooks/useFetching'
import { IPost } from 'shared/interfaces/post.interface'
import { PostService } from 'services/post/Post.service'
import PostItem from '../postItem/PostItem'

interface IPostModal {
	post_id: string | number
}

const PostModal = ({ post_id }: IPostModal) => {
	const { data: post, fetchQuery } = useFetching<IPost>({
		callback: async () => {
			const response = await PostService.getPost(post_id)
			return response.data
		},
	})

	useEffect(() => {
		fetchQuery()
	}, [])

	if (!post) return

	return (
		<div className={styles.wrapper}>
			<PostItem isForModal={true} post={post}></PostItem>
		</div>
	)
}

export default PostModal
