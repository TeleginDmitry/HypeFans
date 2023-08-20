import createContainer from 'utils/createContainer/createContainer'
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
  const contentRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [isMounted, setMounted] = useState(false)
  const [isNeedScroll, setIsNeedScroll] = useState(false)

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
    if (!contentRef.current || !isMounted) return

    appendClass()

    const handleResize = () => {
      setIsNeedScroll(contentRef.current.offsetHeight > window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      deleteClass()
      window.removeEventListener('resize', handleResize)
    }
  }, [isMounted])

  return isMounted ? (
    <Portal element={document.getElementById(MODAL_CONTAINER_ID)}>
      <div
        style={{
          alignItems: isNeedScroll ? 'flex-start' : 'center',
          backgroundColor: `rgb(65, 65, 65, ${opacity})`
        }}
        onMouseUp={handleModalClick}
        className={styles.modal}
        ref={wrapperRef}
      >
        <div className={styles.content} ref={contentRef}>
          {children}
        </div>
      </div>
    </Portal>
  ) : null
}

export default Modal
