import { PREVIEW_CONTAINER_ID } from 'configs/index.config'
import { AnimatePresence, motion } from 'framer-motion'
import { useOverflowBody } from 'hooks/useOverflowBody'
import logo from '@assets/images/auth/logoBlack.png'
import { useEffect, useState } from 'react'

import styles from './Preview.module.scss'
import Portal from '../portal/Portal'

const Preview = () => {
  const [isVisible, setIsVisible] = useState(true)

  const { appendClass, deleteClass } = useOverflowBody()

  useEffect(() => {
    // appendClass()
    const timeout = setTimeout(() => {
      setIsVisible(false)
      // deleteClass()
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Portal element={document.getElementById(PREVIEW_CONTAINER_ID)}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            transition={{ duration: 1 }}
            className={styles.preview}
            exit={{ opacity: 0 }}
          >
            <motion.img
              className={styles.preview__img}
              transition={{ duration: 1 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              draggable={false}
              alt='HypeFans'
              src={logo}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  )
}

export default Preview
