import {
  MAX_LENGTH_LETTER_FOR_INPUT,
  POST_LIST_KEY
} from 'configs/index.config'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { PostService } from 'services/post/Post.service'
import { Search, Send } from 'icons-hypefans-lib'
import cn from 'utils/classNames/classNames'
import { Textarea } from 'ui-hypefans-lib'
import React from 'react'

import styles from './CreationForm.module.scss'

interface ICreationForm {
  changeInputValue(value: string): void
  changeStateActive: () => void
  inputValue: string
}

const CreationForm = ({
  changeStateActive,
  changeInputValue,
  inputValue
}: ICreationForm) => {
  const queryClient = useQueryClient()

  const userId = useTypedSelector((state) => state.auth.user?.id)

  const { mutate: createPost } = useMutation(
    async (description: string) => {
      const data = {
        user_id: userId,
        description
      }
      const response = await PostService.createPost(data)

      return response.data
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries(POST_LIST_KEY)

        changeInputValue('')
      }
    }
  )

  function handlerInputChange(input: React.ChangeEvent<HTMLTextAreaElement>) {
    changeInputValue(input.target.value)
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (inputValue.length) {
      createPost(inputValue)
    }
  }

  const classTextarea = cn([styles.textarea], {
    [styles.textarea__font]: inputValue.length > MAX_LENGTH_LETTER_FOR_INPUT
  })

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.creation}>
        <Textarea
          placeholder='Хей, о чем ты думаешь?'
          onChange={handlerInputChange}
          className={classTextarea}
          value={inputValue}
        ></Textarea>
      </div>
      {inputValue.length ? (
        <button type='submit'>
          <Send></Send>
        </button>
      ) : (
        <Search onClick={changeStateActive} strokeWidth={2}></Search>
      )}
    </form>
  )
}

export default CreationForm
