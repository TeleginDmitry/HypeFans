import cn from '@utils/classNames/classNames'
import { motion } from 'framer-motion'
import React from 'react'

import styles from './Loader.module.scss'

interface ILoader {
  className?: string
}

const Loader = ({ className }: ILoader) => {
  return (
    <motion.div
      className={styles.wrapper}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <svg className={cn([styles.spinner, className])} viewBox='0 0 50 50'>
        <circle
          className={styles.path}
          strokeWidth='5'
          fill='none'
          cy='25'
          cx='25'
          r='20'
        ></circle>
      </svg>
    </motion.div>
  )
}

export default Loader
