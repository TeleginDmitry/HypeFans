import React, { useState } from 'react'
import styles from './UserInfo.module.scss'
import { ReactComponent as Clear } from '@assets/images/newPost/arrow-left.svg'
import { ReactComponent as Points } from '@assets/images/profile/points.svg'
import { classNames as cn } from '@utils/classNames/classNames'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/ReduxHooks'
import { SERVER_URL } from '../../../../configs/api.config'



const UserInfo = () => {
	const navigate = useNavigate()

	const user = useAppSelector(state => state.auth.user)

	const [isFullDescription, setIsFullDescription] = useState(false)

	return (
		<div className={styles.wrapper}>
			{user?.background && (
				<div className={styles.background__container}>
					<img
						className={styles.background}
						src={`${SERVER_URL}${user.background}`}
						alt='HypeFans'
					/>
				</div>
			)}

			<div
				className={
					user?.background
						? styles.content
						: cn([styles.content, styles.content_active])
				}
			>
				<div className={styles.avatar__container}>
					<img
						className={styles.avatar}
						src={`${SERVER_URL}${user?.avatar}`}
						alt='HypeFans'
						draggable={false}
					/>
					{user?.status && <div className={styles.status}></div>}
				</div>
				<h2 className={styles.username}>{user?.username}</h2>
				<span className={styles.prefix}>{user?.prefix}</span>
				<div className={styles.count__contents}>
					<span className={styles.count__posts}>{user?.posts} постов</span>
					<span className={styles.count__fans}>365 друзей</span>
				</div>
			</div>
			{user?.description && (
				<div
					className={
						user?.background
							? styles.description__container
							: cn([
									styles.description__container,
									styles.description__container_active,
							  ])
					}
				>
					<p
						className={
							isFullDescription
								? cn([styles.description, styles.description__active])
								: styles.description
						}
					>
						{user?.description}
					</p>

					<span
						onClick={() => setIsFullDescription(state => (state = !state))}
						className={styles.description__span}
					>
						{isFullDescription && user?.description?.length > 300
							? 'Скрыть'
							: 'Читать больше'}
					</span>
				</div>
			)}

			<Clear
				onClick={() => {
					navigate(-1)
				}}
				className={styles.background__back}
			></Clear>
			<Points className={styles.background__points}></Points>
		</div>
	)
}

export default UserInfo
