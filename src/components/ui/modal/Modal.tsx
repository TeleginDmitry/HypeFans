import React from 'react'
import styles from './Modal.module.scss'
import { ReactComponent as Close } from '@assets/images/x.svg'

export enum IColors {
	gray = '#1A1A1A',
}

interface IModal {
	children: React.ReactElement
	color: IColors
	handlerClose?: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ children, color, handlerClose }: IModal) => {


	return (
		<div className={styles.modal} style={{ backgroundColor: color }}>
			{children}
			<Close onClick={handlerClose} className={styles.modal__close}></Close>
		</div>
	)
}

export default Modal
