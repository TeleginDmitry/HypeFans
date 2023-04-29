import React, { useState } from 'react'
import { classNames as cn } from 'utils/classNames/classNames'
import styles from './ProfileDescription.module.scss'

interface IProfileDescription {
	description: string
}

const ProfileDescription = ({ description }: IProfileDescription) => {
	const [isFullDescription, setIsFullDescription] = useState(false)

	return (
		<>
			{description && (
				<div className={styles.description__container}>
					<p
						className={
							isFullDescription
								? cn([styles.description, styles.description__active])
								: styles.description
						}
					>
						{description}
					</p>
					{description?.length > 80 && (
						<span
							onClick={() => setIsFullDescription(state => !state)}
							className={styles.description__span}
						>
							{isFullDescription ? 'Скрыть' : 'Читать больше'}
						</span>
					)}
				</div>
			)}
		</>
	)
}

export default ProfileDescription
