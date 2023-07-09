import { useQueryClient, useMutation } from '@tanstack/react-query'
import useViewUploadMedias from 'hooks/useViewUploadMedias'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { PostService } from 'services/post/Post.service'
import { POST_LIST_KEY } from 'configs/index.config'
import React, { useEffect, useState } from 'react'
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

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.creation}>
        <Textarea
          style={{ fontSize: isSmallText ? '14px' : '19px' }}
          placeholder='Хей, о чем ты думаешь?'
          className={styles.creation__input}
          onChange={handlerInputChange}
          value={inputValue}
          size='small'
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
