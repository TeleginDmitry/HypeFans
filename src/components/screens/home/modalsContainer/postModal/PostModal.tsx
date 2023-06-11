import React from 'react'
import styles from './PostModal.module.scss'
import { PostService } from 'services/post/Post.service'
import Modal from 'components/ui/modal/Modal'
import { useQuery } from '@tanstack/react-query'
import { POST_MODAL_KEY, POST_PARAM } from 'configs/index.config'
import { useSearchParams } from 'react-router-dom'
import PostItem from '../../post/postItem/PostItem'
import PostModalHeader from './postModalHeader/PostModalHeader'

interface IPostModal {}

const PostModal = ({}: IPostModal) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const post_id = searchParams.get(POST_PARAM)

	const { data: post } = useQuery({
		queryKey: [POST_MODAL_KEY, post_id],
		queryFn: async () => {
			const response = await PostService.getPost(post_id)
			return response.data
		},
		enabled: !!post_id,
	})

	function handlerClosePost() {
		searchParams.delete(POST_PARAM)
		setSearchParams(searchParams)
	}

	if (!post) return null

	const { id, user } = post

	return (
		<Modal handlerClose={handlerClosePost}>
			<div className={styles.wrapper}>
				<PostModalHeader
					handlerClose={handlerClosePost}
					post_id={id}
					user={user}
				></PostModalHeader>
				<PostItem post={post}></PostItem>
			</div>
		</Modal>
	)
}

export default PostModal
