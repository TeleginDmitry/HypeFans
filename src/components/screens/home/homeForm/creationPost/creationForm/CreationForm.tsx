import {
  MAX_LENGTH_LETTER_FOR_INPUT,
  POST_LIST_KEY
} from 'configs/index.config'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import useViewUploadMedias from 'hooks/useViewUploadMedias'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { PostService } from 'services/post/Post.service'
import React, { useEffect, useState } from 'react'
import cn from 'utils/classNames/classNames'
import { Textarea } from 'ui-hypefans-lib'

import CreationFormActions from './creationFormActions/CreationFormActions'
import CreationFormMedias from './creationFormMedias/CreationFormMedias'
import styles from './CreationForm.module.scss'

const CreationForm = () => {
  const [inputValue, setInputValue] = useState('')
  const [isSmallText, setIsSmallText] = useState(false)

  const queryClient = useQueryClient()

  const userId = useTypedSelector((state) => state.auth.user?.id)

  const [medias, setMedias, handlerMedia] = useViewUploadMedias({
    isInfinity: true
  })

  const { mutate: createMedia } = useMutation(
    async (post_id: number) => {
      medias.forEach(async (media) => {
        const formData = new FormData()
        formData.append('media', media.upload)
        formData.append('type', media.type)
        formData.append('post', post_id.toString())

        await PostService.createMedia(formData)
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(POST_LIST_KEY)
        setMedias([])
      }
    }
  )

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
      onSuccess: async ({ id }) => {
        if (medias.length) {
          createMedia(id)
        } else {
          queryClient.invalidateQueries(POST_LIST_KEY)
        }

        setInputValue('')
      }
    }
  )

  function handlerInputChange(input: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(input.target.value)
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (inputValue || medias.length) {
      createPost(inputValue)
    }
  }

  useEffect(() => {
    if (inputValue.length > 100) {
      setIsSmallText(true)
    } else {
      setIsSmallText(false)
    }
  }, [inputValue])

  const classTextarea = cn(
    [styles.textarea],
    [inputValue.length > MAX_LENGTH_LETTER_FOR_INPUT, styles.textarea__font]
  )

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.creation}>
        <Textarea
          placeholder='Хей, о чем ты думаешь?'
          onChange={handlerInputChange}
          className={classTextarea}
          value={inputValue}
          size='large'
        ></Textarea>
        <CreationFormMedias
          setMedias={setMedias}
          medias={medias}
        ></CreationFormMedias>

        <CreationFormActions
          mediasLength={medias.length}
          handlerMedia={handlerMedia}
          inputValue={inputValue}
        ></CreationFormActions>
      </div>
    </form>
  )
}

export default CreationForm
