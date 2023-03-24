import React from 'react'
import { classNames as cn } from '@utils/classNames/classNames'
import styles from './Input.module.scss'

interface IInput extends React.HTMLAttributes<HTMLInputElement> {
	isWrong?: boolean
	type?: string
}

export default function Input({ isWrong = false,type, ...props }: IInput) {
	return (
		<input
			{...props}
			className={isWrong ? cn([styles.input, styles.wrong]) : styles.input}
			type={type}
		/>
	)
}
