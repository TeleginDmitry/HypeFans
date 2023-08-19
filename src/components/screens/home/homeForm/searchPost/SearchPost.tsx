import { ComponentWithAuthorized } from 'hocs/ComponentWithAuthorized'
import MyAvatar from 'components/ui/avatars/myAvatar/MyAvatar'
import { POST_PARAM } from 'configs/index.config'
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'icons-hypefans-lib'

import SearchPostList from './searchPostList/SearchPostList'
import styles from './SearchPost.module.scss'

interface ISearchPost {
  changeStateActive: () => void
}

const SearchPost = ({ changeStateActive }: ISearchPost) => {
  const navigate = useNavigate()

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
    <div className={styles.wrapper}>
      <ComponentWithAuthorized>
        <MyAvatar />
      </ComponentWithAuthorized>

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

      <ComponentWithAuthorized
        Component={
          <Search
            className={styles.icon}
            onClick={focusInput}
            strokeWidth={2}
          ></Search>
        }
      >
        <X
          onClick={changeStateActive}
          className={styles.icon}
          strokeWidth={2}
        ></X>
      </ComponentWithAuthorized>

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
