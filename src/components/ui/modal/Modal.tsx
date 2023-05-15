import React, { useEffect } from 'react'
import styles from './Modal.module.scss'
import { ReactComponent as Close } from '@assets/images/x.svg'
import { useOverflowBody } from 'hooks/useOverflowBody'

interface IModal {
	children: React.ReactElement
	opacity?: number
	isVisible: boolean
	handlerClose?: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({
	children,
	isVisible = false,
	opacity = 0.8,
	handlerClose,
}: IModal) => {
	const { appendClass, deleteClass } = useOverflowBody()

	useEffect(() => {
		if (isVisible) appendClass()
		else deleteClass()
	}, [isVisible])

	if (!isVisible) return null

	return (
		<div className={styles.modal}>
			<div className={styles.scroll}>
				<div className={styles.content}>
					{children}
				</div>
			</div>
			<Close onClick={handlerClose} className={styles.modal__close}></Close>
			<div className={styles.background} style={{ opacity }}></div>
		</div>
	)
}

export default Modal
