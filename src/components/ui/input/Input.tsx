import React from 'react'
import { classNames as cn } from '@utils/classNames/classNames'
import styles from './Input.module.scss'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
	isWrong?: boolean
	label?: string
}

export default function Input({ isWrong = false, label, ...props }: IInput) {
	return (
		<label>
			{label}
			<input
				{...props}
				className={isWrong ? cn([styles.input, styles.wrong]) : styles.input}
			/>
		</label>
	)
}
