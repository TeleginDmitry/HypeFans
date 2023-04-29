import React from 'react'
import styles from './ValidateField.module.scss'
import { AnimatePresence, motion } from 'framer-motion'

interface IValidateField {
	isTouched: boolean
	error: string
}

const ValidateField = ({ isTouched, error }: IValidateField) => {
	return (
		<AnimatePresence>
			{isTouched && !!error && (
				<motion.div
					className={styles.error}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					{error}
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default ValidateField
