import ReactTextareaAutosize from 'react-textarea-autosize'
import { Send } from 'icons-hypefans-lib'
import { motion } from 'framer-motion'

import styles from './StoryModalForm.module.scss'

const StoryModalForm = () => {
  return (
    <motion.form
      whileHover={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className={styles.form}
    >
      <ReactTextareaAutosize
        className={styles.form__input}
        placeholder='Ваш комментарий'
        maxRows={5}
      ></ReactTextareaAutosize>

      <button className={styles.form__button}>
        <Send></Send>
      </button>
    </motion.form>
  )
}

export default StoryModalForm
