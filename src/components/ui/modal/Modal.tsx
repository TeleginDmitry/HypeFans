import React, { useEffect, useState, useRef } from 'react'
import styles from './Modal.module.scss'
import { useOverflowBody } from 'hooks/useOverflowBody'
import createContainer from 'utils/createContainer/CreateContainer'
import Portal from 'components/shared/portal/Portal'
import { MODAL_CONTAINER_ID } from 'configs/index.config'

interface IModal {
	children: React.ReactElement
	opacity?: number
	handlerClose(): void
}

const Modal = ({ children, opacity = 0.8, handlerClose }: IModal) => {
	const contentRef = useRef<HTMLDivElement>(null)

	const [isMounted, setMounted] = useState(false)

	const { appendClass, deleteClass } = useOverflowBody()

	const handleModalClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (event.target === contentRef.current) {
			handlerClose()
		}
	}

	useEffect(() => {
		appendClass()
		return () => {
			deleteClass()
		}
	}, [])

	useEffect(() => {
		createContainer({ id: MODAL_CONTAINER_ID })
		setMounted(true)
	}, [])

	useEffect(() => {
		const handleEscapePress = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				handlerClose()
			}
		}

		window.addEventListener('keydown', handleEscapePress)

		return () => {
			window.removeEventListener('keydown', handleEscapePress)
		}
	}, [handlerClose])

	return isMounted ? (
		<Portal element={document.getElementById(MODAL_CONTAINER_ID)}>
			<div onClick={handleModalClick} className={styles.modal}>
				<div className={styles.scroll}>
					<div ref={contentRef} className={styles.content}>
						{children}
					</div>
				</div>

				<div className={styles.background} style={{ opacity }}></div>
			</div>
		</Portal>
	) : null
}

export default Modal
