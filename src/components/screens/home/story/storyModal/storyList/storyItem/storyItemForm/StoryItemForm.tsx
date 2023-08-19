import { Textarea } from 'ui-hypefans-lib'
import { Send } from 'icons-hypefans-lib'

import styles from './StoryItemForm.module.scss'

const StoryItemForm = () => {
  return (
    <form className={styles.form}>
      <Textarea
        className={styles.form__input}
        placeholder='Ваш комментарий'
        maxRows={5}
      ></Textarea>

      <button className={styles.form__button}>
        <Send></Send>
      </button>
    </form>
  )
}

export default StoryItemForm
