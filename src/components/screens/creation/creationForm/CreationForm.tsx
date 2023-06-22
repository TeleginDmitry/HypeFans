import TextareaInput from 'components/ui/textareaInput/TextareaInput'
import MediasList from 'components/shared/media/mediaList/MediasList'
import SelectMedia from 'components/shared/selectMedia/SelectMedia'
import useViewUploadMedias from 'hooks/useViewUploadMedias'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { PostService } from 'services/post/Post.service'
import { useMutation } from '@tanstack/react-query'
import cn from '@utils/classNames/classNames'
import { Button } from 'ui-hypefans-lib'
import { useFormik } from 'formik'
import React from 'react'

import styles from './CreationForm.module.scss'

interface IInitialValues {
  description: string
}

const initialValues: IInitialValues = {
  description: ''
}

const validate = (values: IInitialValues) => {
  const errors: Partial<IInitialValues> = {}

  if (!values.description) {
    errors.description = 'Это поле обязательно для заполнения'
  }

  return errors
}

const CreationForm = () => {
  const userId = useTypedSelector((state) => state.auth.user?.id)

  const [medias, setMedias, handlerMedia] = useViewUploadMedias({
    isInfinity: true
  })

  const { mutate: createMedia } = useMutation(
    async (post_id: number) => {
      medias.forEach(async (media) => {
        const formData = new FormData()
        formData.append('media', media.upload)
        formData.append('post_id', post_id.toString())

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
      onSuccess: ({ id }) => {
        createMedia(id)
        resetForm()
      }
    }
  )

  const {
    getFieldProps,
    isSubmitting,
    handleSubmit,
    resetForm,
    touched,
    errors
  } = useFormik({
    onSubmit(values) {
      try {
        const { description } = values
        createPost(description)
      } catch (error) {
        throw new Error('Возникла ошибка при создании поста.', error)
      }
    },
    initialValues,
    validate
  })

  function deleteMedia(id: number) {
    setMedias((state) => state.filter((media) => media.id !== id))
  }

  function handlerUploadMedias({
    target
  }: React.ChangeEvent<HTMLInputElement>) {
    handlerMedia(target.files)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextareaInput
        {...getFieldProps('description')}
        className={cn(
          [styles.input],
          [errors.description && touched.description, styles.input__wrong]
        )}
        placeholder='Поделитесь своими мыслями...'
        minRows={6}
      ></TextareaInput>
      <MediasList deleteMedia={deleteMedia} medias={medias}></MediasList>
      <SelectMedia onChange={handlerUploadMedias}></SelectMedia>
      <div className={styles.button__container}>
        <Button disabled={isSubmitting} type='submit'>
          Опубликовать
        </Button>
      </div>
    </form>
  )
}

export default CreationForm
