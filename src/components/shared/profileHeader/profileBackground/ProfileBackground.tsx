import { SERVER_URL } from 'configs/api.config'
import React from 'react'
import styles from './ProfileBackground.module.scss'
import { ReactComponent as Clear } from '@assets/images/newPost/arrow-left.svg'
import { ReactComponent as Points } from '@assets/images/profile/points.svg'
import { useNavigate } from 'react-router-dom'
import cn from '@utils/classNames/classNames'

interface IProfileBackground {
	background?: string
}

const ProfileBackground = ({ background }: IProfileBackground) => {
	const navigate = useNavigate()

	return (
		<div className={styles.wrapper}>
			{background && (
				<div className={styles.background__container}>
					<img
						className={styles.background}
						src={`${SERVER_URL}${background}`}
						alt='HypeFans'
					/>
				</div>
			)}
			<Clear
				onClick={() => {
					navigate(-1)
				}}
				className={cn(
					[styles.background__back],
					[!background, styles.background__back_color]
				)}
			></Clear>
			<Points
				className={cn(
					[styles.background__points],
					[!background, styles.background__points_color]
				)}
			></Points>
		</div>
	)
}

export default ProfileBackground
