import { useEffect, useState } from 'react'
import styles from './Preview.module.scss'
import logo from '@assets/images/auth/logoBlack.png'
import { motion, AnimatePresence } from 'framer-motion'
import { useOverflowBody } from 'hooks/useOverflowBody'
import { PREVIEW_CONTAINER_ID } from 'configs/index.config'
import Portal from '../portal/Portal'

const Preview = () => {
	const [isVisible, setIsVisible] = useState(true)

	const { appendClass, deleteClass } = useOverflowBody()

	useEffect(() => {
		// appendClass()
		const timeout = setTimeout(() => {
			setIsVisible(false)
			// deleteClass()
		}, 3000)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<Portal element={document.getElementById(PREVIEW_CONTAINER_ID)}>
			<AnimatePresence>
				{isVisible && (
					<motion.div
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
						className={styles.preview}
					>
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
		</Portal>
	)
}

export default Preview
