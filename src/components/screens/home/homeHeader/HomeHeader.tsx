import { AnimatePresence, motion } from 'framer-motion'
import { Search, X } from 'icons-hypefans-lib'
import cn from '@utils/classNames/classNames'
import logo from '@assets/images/logo.png'
import React, { useState } from 'react'

import styles from './HomeHeader.module.scss'

export default function HomeHeader() {
  const [isActiveSearch, setIsActiveSearch] = useState(false)
  const [inputValue, setInputValue] = useState('')

  function handlerClickSearch() {
    setIsActiveSearch((state) => (state = !state))
  }

  const handlerChangeInput: React.ChangeEventHandler<HTMLInputElement> = (
    input
  ) => {
    setInputValue(input.target.value)
  }

  const handlerClear = () => {
    setInputValue('')
  }

  return (
    <div
      className={cn([styles.header], [isActiveSearch, styles.header__active])}
    >
      <div className={styles.header__block}>
        <AnimatePresence exitBeforeEnter>
          {isActiveSearch ? (
            <motion.div
              className={styles.input__container}
              transition={{ duration: 0.3 }}
              key={`${isActiveSearch}`}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <X className={styles.input__svg} onClick={handlerClear}></X>
              <input
                placeholder='Поиск профиля...'
                onChange={handlerChangeInput}
                className={styles.input}
                value={inputValue}
                type='text'
              />
            </motion.div>
          ) : (
            <motion.div
              className={styles.logo__container}
              transition={{ duration: 0.3 }}
              key={`${isActiveSearch}`}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <img className={styles.logo} alt='HypeFans' src={logo} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.search__container} onClick={handlerClickSearch}>
        <Search className={styles.search}></Search>
      </div>
    </div>
  )
}
