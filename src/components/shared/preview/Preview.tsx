import React, { useEffect, useState } from 'react'
import styles from './Preview.module.scss'
import logo from '@assets/images/auth/logoBlack.png'
import { motion, AnimatePresence } from 'framer-motion'

const Preview = () => {
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
    document.body.style.overflow = 'hidden'
		setTimeout(() => {
      document.body.style.overflow = 'auto'
		  setIsVisible(false)
		}, 3000)
	}, [])

	return (
		<>
			<AnimatePresence>
				{isVisible && (
					<motion.div exit={{opacity: 0}} transition={{ duration: 1 }} className={styles.preview}>
						<motion.img
							transition={{ duration: 1 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							draggable={false}
							className={styles.preview__img}
							src={logo}
							alt='HypeFans'
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default Preview
