import React from 'react'
import styles from './ShortUserInfo.module.scss'

interface IShortUserInfo {
	avatar: string
	prefix: string
	username: string
	onClick?: React.MouseEventHandler<HTMLDivElement>
}

const ShortUserInfo = ({
	avatar,
	prefix,
	username,
	onClick,
}: IShortUserInfo) => {
	return (
		<div onClick={onClick} className={styles.short}>
			<div className={styles.avatar__container}>
				<img
					draggable={false}
					className={styles.avatar}
					src={avatar}
					alt='HypeFans'
				/>
			</div>
			<div className={styles.user__container}>
				<h2 className={styles.user__username}>{username}</h2>
				<span className={styles.user__prefix}>{prefix}</span>
			</div>
		</div>
	)
}

export default ShortUserInfo
