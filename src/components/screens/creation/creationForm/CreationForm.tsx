import SelectMedia from 'components/shared/selectMedia/SelectMedia'
import useViewUploadMedias from 'hooks/useViewUploadMedias'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { PostService } from 'services/post/Post.service'
import { useMutation } from '@tanstack/react-query'
import { Textarea, Button } from 'ui-hypefans-lib'
import React, { useState } from 'react'

import CreationFormMedias from './creationFormMedias/CreationFormMedias'
import styles from './CreationForm.module.scss'

const CreationForm = () => {
  const [inputValue, setInputValue] = useState('')

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

  function handlerUploadMedias({
    target
  }: React.ChangeEvent<HTMLInputElement>) {
    handlerMedia(target.files)
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Textarea
        placeholder='Поделитесь своими мыслями...'
        onChange={handlerInputChange}
        className={styles.input}
        value={inputValue}
        minRows={7}
      ></Textarea>
      <CreationFormMedias
        setMedias={setMedias}
        medias={medias}
      ></CreationFormMedias>
      <SelectMedia onChange={handlerUploadMedias}></SelectMedia>
      <div className={styles.button__container}>
        <Button type='submit'>Опубликовать</Button>
      </div>
    </form>
  )
}

export default CreationForm
