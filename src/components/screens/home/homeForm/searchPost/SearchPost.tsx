import MyAvatar from 'components/ui/avatars/myAvatar/MyAvatar'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { POST_PARAM } from 'configs/index.config'
import React, { useState, useRef } from 'react'
import { Search, X } from 'icons-hypefans-lib'
import { useNavigate } from 'react-router-dom'
import cn from '@utils/classNames/classNames'

import SearchPostList from './searchPostList/SearchPostList'
import styles from './SearchPost.module.scss'

interface ISearchPost {
  changeStateActive: () => void
}

const SearchPost = ({ changeStateActive }: ISearchPost) => {
  const navigate = useNavigate()

  const isAuth = useTypedSelector((state) => state.auth.isAuth)

  const inputRef = useRef<HTMLInputElement>(null)

  const [valueInput, setValueInput] = useState('')

  function onChange(input: React.ChangeEvent<HTMLInputElement>) {
    setValueInput(input.target.value)
  }

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  function onClickPost(post_id: number) {
    setValueInput('')

    navigate(`/?${POST_PARAM}=${post_id}`)
  }

  return (
    <div className={cn([styles.wrapper], [valueInput, styles.wrapper__active])}>
      {isAuth && <MyAvatar />}

      <div className={styles.searching}>
        <input
          className={styles.searching__input}
          placeholder='Поиск поста...'
          onChange={onChange}
          value={valueInput}
          ref={inputRef}
          type='text'
        />
      </div>
      {isAuth ? (
        <div className={styles.icon__container} onClick={changeStateActive}>
          <X className={styles.icon}></X>
        </div>
      ) : (
        <div className={styles.icon__container} onClick={focusInput}>
          <Search className={styles.icon}></Search>
        </div>
      )}

      {valueInput && (
        <SearchPostList
          onClickPost={onClickPost}
          valueInput={valueInput}
        ></SearchPostList>
      )}
    </div>
  )
}

export default SearchPost
