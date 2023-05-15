import { motion } from 'framer-motion'
import React from 'react'
import styles from './Loader.module.scss'
import { classNames as cn } from 'utils/classNames/classNames'

interface ILoader {
	className?: string
}

const Loader = ({ className }: ILoader) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.wrapper}
		>
			<svg className={cn([styles.spinner, className])} viewBox='0 0 50 50'>
				<circle
					className={styles.path}
					cx='25'
					cy='25'
					r='20'
					fill='none'
					stroke-width='5'
				></circle>
			</svg>
		</motion.div>
	)
}

export default Loader
