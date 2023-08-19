import MyAvatar from 'components/ui/avatars/myAvatar/MyAvatar'
import { useState } from 'react'

import CreationForm from './creationForm/CreationForm'
import styles from './CreationPost.module.scss'

interface ICreationPost {
  changeStateActive: () => void
}

const CreationPost = ({ changeStateActive }: ICreationPost) => {
  const [inputValue, setInputValue] = useState('')

  function changeInputValue(value: string) {
    setInputValue(value)
  }

  return (
    <div className={styles.wrapper}>
      <MyAvatar />

      <CreationForm
        changeStateActive={changeStateActive}
        changeInputValue={changeInputValue}
        inputValue={inputValue}
      ></CreationForm>
    </div>
  )
}

export default CreationPost
