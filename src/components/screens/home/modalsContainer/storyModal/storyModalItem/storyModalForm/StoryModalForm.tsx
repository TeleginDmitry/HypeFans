import React from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'
import styles from './StoryModalForm.module.scss'
import { ReactComponent as Send } from '@assets/images/send.svg'
import { motion } from 'framer-motion'

const StoryModalForm = () => {
	return (
		<motion.form
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			whileHover={{ opacity: 1 }}
			className={styles.form}
		>
			<ReactTextareaAutosize
				maxRows={5}
				className={styles.form__input}
				placeholder='Ваш комментарий'
			></ReactTextareaAutosize>

			<button className={styles.form__button}>
				<Send></Send>
			</button>
		</motion.form>
	)
}

export default StoryModalForm
