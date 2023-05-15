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
	const classNameWrapper = isWrong
		? cn([styles.input, styles.wrong, className])
		: cn([styles.input, className])

	return (
		<ReactTextareaAutosize
			className={classNameWrapper}
			minRows={minRows}
			{...props}
		/>
	)
}

export default TextareaInput
