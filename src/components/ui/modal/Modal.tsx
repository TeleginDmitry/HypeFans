import createContainer from 'utils/createContainer/CreateContainer'
import React, { useEffect, useState, useRef } from 'react'
import { MODAL_CONTAINER_ID } from 'configs/index.config'
import { useOverflowBody } from 'hooks/useOverflowBody'
import Portal from 'components/shared/portal/Portal'

import styles from './Modal.module.scss'

interface IModal {
  handlerClose: () => void | null
  children: React.ReactElement
  opacity?: number
}

const Modal = ({ opacity = 0.8, handlerClose, children }: IModal) => {
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
        style={{ backgroundColor: `rgb(65, 65, 65, ${opacity})` }}
        onClick={handleModalClick}
        className={styles.modal}
        ref={wrapperRef}
      >
        {children}
      </div>
    </Portal>
  ) : null
}

export default Modal
