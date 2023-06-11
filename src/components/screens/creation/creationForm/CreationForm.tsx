import React from 'react'
import styles from './CreationForm.module.scss'
import TextareaInput from 'components/ui/textareaInput/TextareaInput'
import SelectMedia from 'components/shared/selectMedia/SelectMedia'
import MediasList from 'components/shared/media/mediaList/MediasList'
import { Button } from 'ui-hypefans-lib'
import useViewUploadMedias from 'hooks/useViewUploadMedias'
import { useFormik } from 'formik'
import { PostService } from 'services/post/Post.service'
import { useTypedSelector } from 'hooks/useTypedSelector'
import useFetching from 'hooks/useFetching'
import { classNames } from 'utils/classNames/classNames'
import { useMutation } from '@tanstack/react-query'

interface IInitialValues {
	description: string
}

const initialValues: IInitialValues = {
	description: '',
}

const validate = (values: IInitialValues) => {
	const errors: Partial<IInitialValues> = {}

	if (!values.description) {
		errors.description = 'Это поле обязательно для заполнения'
	}

	return errors
}

const CreationForm = () => {
	const userId = useTypedSelector(state => state.auth.user?.id)

	const [medias, setMedias, handlerMedia] = useViewUploadMedias({
		isInfinity: true,
	})

	const { mutate: createMedia } = useMutation(
		async (post_id: number) => {
			medias.forEach(async media => {
				const formData = new FormData()
				formData.append('media', media.upload)
				formData.append('post_id', post_id.toString())

				await PostService.createMedia(formData)
			})
		},
		{
			onSuccess: () => {
				setMedias([])
			},
		}
	)

	const { mutate: createPost } = useMutation(
		async (description: string) => {
			const data = {
				description,
				user_id: userId,
			}
			const response = await PostService.createPost(data)

			return response.data
		},
		{
			onSuccess: ({ id }) => {
				createMedia(id)
				resetForm()
			},
		}
	)

	const {
		handleSubmit,
		getFieldProps,
		errors,
		touched,
		isSubmitting,
		resetForm,
	} = useFormik({
		initialValues,
		validate,
		onSubmit(values) {
			try {
				const { description } = values
				createPost(description)
			} catch (error) {
				throw new Error('Возникла ошибка при создании поста.', error)
			}
		},
	})

	function deleteMedia(id: number) {
		setMedias(state => state.filter(media => media.id !== id))
	}

	function handlerUploadMedias({
		target,
	}: React.ChangeEvent<HTMLInputElement>) {
		handlerMedia(target.files)
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<TextareaInput
				{...getFieldProps('description')}
				placeholder='Поделитесь своими мыслями...'
				minRows={6}
				className={
					errors.description && touched.description
						? classNames([styles.input, styles.input__wrong])
						: styles.input
				}
			></TextareaInput>
			<MediasList medias={medias} deleteMedia={deleteMedia}></MediasList>
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
