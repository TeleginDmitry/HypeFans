import React, { useEffect, useState, useRef } from 'react'
import styles from './Modal.module.scss'
import { useOverflowBody } from 'hooks/useOverflowBody'
import createContainer from 'utils/createContainer/CreateContainer'
import Portal from 'components/shared/portal/Portal'
import { MODAL_CONTAINER_ID } from 'configs/index.config'

interface IModal {
	children: React.ReactElement
	opacity?: number
	handlerClose: () => void | null
}

const Modal = ({ children, opacity = 0.8, handlerClose }: IModal) => {
	const wrapperRef = useRef<HTMLDivElement>(null)
	const [isMounted, setMounted] = useState(false)

	const { appendClass, deleteClass } = useOverflowBody()

	const handleModalClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (!handlerClose) return

		if (event.target === wrapperRef.current) {
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
		if (!handlerClose) return

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

	useEffect(() => {
		if (!isMounted) return

		const modalElement = wrapperRef.current

		if (modalElement.scrollHeight > window.innerHeight) {
			modalElement.classList.add(styles.scrollable)
		} else {
			modalElement.classList.remove(styles.scrollable)
		}
	}, [isMounted])

	return isMounted ? (
		<Portal element={document.getElementById(MODAL_CONTAINER_ID)}>
			<div
				ref={wrapperRef}
				style={{ backgroundColor: `rgb(65, 65, 65, ${opacity})` }}
				onClick={handleModalClick}
				className={styles.modal}
			>
				{children}
			</div>
		</Portal>
	) : null
}

export default Modal
