import React from 'react'
import { IPostMedia } from 'shared/interfaces/post.interface'
import styles from './PostMediasItem.module.scss'
import ShortUserInfo from 'components/shared/shortUserInfo/ShortUserInfo'

interface IPostMediasItem {
	mediaItem: IPostMedia
}

const PostMediasItem = ({ mediaItem }: IPostMediasItem) => {
	const { date_joined, id, media, user } = mediaItem
	return (
		<div className={styles.wrapper}>
			<div className={styles.media__container}>
				<img className={styles.media} src={media} />
			</div>
			<div className={styles.content}>
				<ShortUserInfo
					avatar={user.avatar}
					username={user.username}
					prefix={user.prefix}
				></ShortUserInfo>
			</div>
		</div>
	)
}

export default PostMediasItem
