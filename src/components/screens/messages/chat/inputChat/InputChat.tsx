import React, { useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { ReactComponent as Image } from '@assets/images/chat/image.svg'
import { ReactComponent as Video } from '@assets/images/chat/video.svg'
import { ReactComponent as Tip } from '@assets/images/chat/tip.svg'
import { ReactComponent as Mic } from '@assets/images/chat/mic.svg'
import { ReactComponent as Send } from '@assets/images/chat/send.svg'
import styles from './InputChat.module.scss'
import { AnimatePresence, motion } from 'framer-motion'

const InputChat = () => {
	const [inputValue, setInputValue] = useState('')

	function handlerInput(input: React.ChangeEvent<HTMLTextAreaElement>) {
		let value = input.target.value
		// if (value.at(-1) === ',') {
		// 	value += ' '
		// }
		setInputValue(value)
	}

	return (
		<div className={styles.wrapper}>
			<form className={styles.form}>
				<div className={styles.input__container}>
					<ReactTextareaAutosize
						className={styles.input}
						onChange={handlerInput}
						minRows={3}
						maxRows={5}
						value={inputValue}
						placeholder={'Ваше сообщение...'}
					></ReactTextareaAutosize>
				</div>
				<div className={styles.functions}>
					<div className={styles.actions}>
						<Tip className={styles.action}></Tip>
						<Mic className={styles.action}></Mic>
						<Video className={styles.action}></Video>
						<Image className={styles.action}></Image>
					</div>
					<AnimatePresence>
						{!!inputValue.length && (
							<motion.button
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								type='submit'
								className={styles.button}
							>
								<Send></Send>
							</motion.button>
						)}
					</AnimatePresence>
				</div>
			</form>
		</div>
	)
}

export default InputChat
