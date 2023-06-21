import React from 'react'
import ReactTextareaAutosize, {
	TextareaAutosizeProps,
} from 'react-textarea-autosize'
import styles from './TextareaInput.module.scss'
import cn from '@utils/classNames/classNames'

interface ITextareaProps extends TextareaAutosizeProps {
	isWrong?: boolean
}

const TextareaInput = ({
	isWrong = false,
	className,
	minRows = 1,
	...props
}: ITextareaProps) => {
	const classNameWrapper = cn(
		[styles.input, className],
		[isWrong, styles.wrong]
	)

	return (
		<ReactTextareaAutosize
			className={classNameWrapper}
			minRows={minRows}
			{...props}
		/>
	)
}

export default TextareaInput
