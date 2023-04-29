import React from 'react'
import ReactTextareaAutosize, {
	TextareaAutosizeProps,
} from 'react-textarea-autosize'
import styles from './TextareaInput.module.scss'
import { classNames as cn } from '@utils/classNames/classNames'

interface ITextareaProps extends TextareaAutosizeProps {
	isWrong?: boolean
}

const TextareaInput = ({
	isWrong = false,
	className,
	minRows = 1,
	...props
}: ITextareaProps) => {
	return (
		<ReactTextareaAutosize
			className={isWrong ? cn([styles.input, styles.wrong]) : styles.input}
			minRows={minRows}
			{...props}
		/>
	)
}

export default TextareaInput
