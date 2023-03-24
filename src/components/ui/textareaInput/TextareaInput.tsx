import React from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'
import styles from './TextareaInput.module.scss'
import { classNames as cn } from '@utils/classNames/classNames'

interface ITextarea {
	placeholder?: string
	minRows?: number
	maxRows?: number
	isWrong?: boolean
	value?: string
	name?: string
	id?: string
}

const TextareaInput = ({
	minRows = 8,
	maxRows,
  placeholder,
	isWrong = false,
	...props
}: ITextarea) => {
	return (
		<ReactTextareaAutosize
			minRows={minRows}
			maxRows={maxRows}
      placeholder={placeholder}
			className={isWrong ? cn([styles.input, styles.wrong]) : styles.input}
			{...props}
		/>
	)
}

export default TextareaInput
