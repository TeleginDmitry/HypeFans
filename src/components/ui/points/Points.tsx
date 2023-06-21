import React from 'react'
import styles from './Points.module.scss'
import cn from '@utils/classNames/classNames'

interface IPoints {
	onClick?: React.MouseEventHandler<HTMLDivElement>
	className?: string
}

const Points = ({ onClick, className }: IPoints) => {
	return (
		<div onClick={onClick} className={cn([styles.wrapper, className])}>
			<div className={styles.point}></div>
			<div className={styles.point}></div>
			<div className={styles.point}></div>
		</div>
	)
}

export default Points
