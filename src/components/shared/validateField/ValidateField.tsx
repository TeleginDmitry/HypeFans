import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import styles from './ValidateField.module.scss'

interface IValidateField {
  isTouched: boolean
  error: string
}

const ValidateField = ({ isTouched, error }: IValidateField) => {
  return (
    <AnimatePresence>
      {isTouched && !!error && (
        <motion.div
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className={styles.error}
          exit={{ opacity: 0 }}
        >
          {error}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ValidateField
