import { ReactComponent as Video } from '@assets/images/chat/video.svg'
import { ReactComponent as Image } from '@assets/images/chat/image.svg'
import { ReactComponent as Send } from '@assets/images/chat/send.svg'
import { ReactComponent as Mic } from '@assets/images/chat/mic.svg'
import { ReactComponent as Tip } from '@assets/images/chat/tip.svg'
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
        <div className={styles.input__container}>
          <ReactTextareaAutosize
            placeholder={'Ваше сообщение...'}
            className={styles.input}
            onChange={handlerInput}
            value={inputValue}
            maxRows={5}
            minRows={3}
          ></ReactTextareaAutosize>
        </div>
        <div className={styles.functions}>
          <div className={styles.actions}>
            <Tip className={styles.action}></Tip>
            <Mic className={styles.action}></Mic>
            <Video className={styles.action}></Video>
            <Image className={styles.action}></Image>
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
