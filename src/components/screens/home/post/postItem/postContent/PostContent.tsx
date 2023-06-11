import React, { memo } from 'react'
import styles from './PostContent.module.scss'
import { useNavigate } from 'react-router-dom'
import { POST_PARAM } from 'configs/index.config'
import { IPostMediaShort } from 'shared/interfaces/post.interface'
import PostVariablesImages from './postVariablesImages/PostVariablesImages'

interface IPostContent {
	description: string
	medias: IPostMediaShort[]
	post_id: number
}

const PostContent = ({ description, medias, post_id }: IPostContent) => {
	const navigate = useNavigate()

	function handlerOpenPostModal() {
		navigate(`/?${POST_PARAM}=${post_id}`)
	}

	return (
		<div className={styles.content}>
			<div
				onClick={handlerOpenPostModal}
				className={styles.description__container}
			>
				<p className={styles.description}>{description}</p>
			</div>
			<PostVariablesImages medias={medias}></PostVariablesImages>
		</div>
	)
}

export default memo(PostContent)
