import { Microphone, Photo, Video, Send } from 'icons-hypefans-lib'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

import styles from './InputChat.module.scss'

const InputChat = () => {
  const [inputValue, setInputValue] = useState('')

  function handlerInput(input: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = input.target.value
    // if (value.at(-1) === ',') {
    // 	value += ' '
    // }
    setInputValue(value)
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <ReactTextareaAutosize
          placeholder={'Ваше сообщение...'}
          className={styles.input}
          onChange={handlerInput}
          value={inputValue}
          maxRows={5}
          minRows={3}
        ></ReactTextareaAutosize>
        <div className={styles.functions}>
          <div className={styles.actions}>
            <Microphone></Microphone>
            <Video></Video>
            <Photo></Photo>
          </div>
          <AnimatePresence>
            {!!inputValue.length && (
              <motion.button
                className={styles.button}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                type='submit'
              >
                <Send></Send>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  )
}

export default InputChat
