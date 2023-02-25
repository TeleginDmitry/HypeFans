import React from 'react'
import styles from './PostItem.module.scss'
import { IPost } from '../posts.interface'

export default function PostItem(post: IPost) {
	const {
		count_comments,
		count_likes,
		description,
		id,
		medias,
		user,
		time_create,
	} = post

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.user}>
					<div className={styles.user__container}>
						<div className={styles.logo__container}>
							<img className={styles.logo} src={user.avatar} alt='HypeFans' />
						</div>
						<div className={styles.user__texts}>
							<h2 className={styles.user__name}>{user.username}</h2>
							<span className={styles.user__prefix}>{user.prefix}</span>
						</div>
					</div>
					<div className={styles.time__container}>
						<p className={styles.time}>{time_create}</p>
					</div>
					<div className={styles.point__container}>
						<div className={styles.point}></div>
						<div className={styles.point}></div>
						<div className={styles.point}></div>
					</div>
				</div>
				<div className={styles.content}>
					<div className={styles.description__container}>
						<p className={styles.description}>{description}</p>
					</div>
					<div className={styles.images__container}>
						{medias.map(image => {
							return (
								<img
									className={styles.image}
									src={image.media}
									alt='HypeFans'
								/>
							)
						})}
					</div>
				</div>
				<div className={styles.info}></div>
				<div className={styles.comments}></div>
			</div>
		</div>
	)
}
