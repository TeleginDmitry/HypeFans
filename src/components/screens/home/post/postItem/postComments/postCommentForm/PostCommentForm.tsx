import React from 'react'
import styles from './PostCommentForm.module.scss'
import TextareaInput from 'components/ui/textareaInput/TextareaInput'
import { useFormik } from 'formik'
import { PostService } from 'services/post/Post.service'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { Link } from 'react-router-dom'
import { API_URL } from 'configs/api.config'
import { ReactComponent as Send } from '@assets/images/send.svg'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { COMMENTS_KEY, POST_LIST_KEY } from 'configs/index.config'
import { motion } from 'framer-motion'

interface IInitialValues {
	comment: string
}

interface IPostCommentForm {
	post_id: number
}

const validate = (values: IInitialValues) => {
	const errors: Partial<IInitialValues> = {}

	if (!values.comment) {
		errors.comment = 'Это поле не должно быть пустым...'
	}

	return errors
}

const PostCommentForm = ({ post_id }: IPostCommentForm) => {
	const queryClient = useQueryClient()

	const user = useTypedSelector(state => state.auth.user)

	const { mutate } = useMutation(
		async (comment: string) => {
			const data = {
				text: comment,
				post_id: post_id,
			}
			const response = await PostService.createComment(data)
			return response.data
		},
		{
			onSuccess: () => {
				resetForm()
				queryClient.prefetchInfiniteQuery([COMMENTS_KEY, post_id])
				queryClient.invalidateQueries(POST_LIST_KEY)
			},
		}
	)

	const { handleSubmit, handleChange, getFieldProps, resetForm } = useFormik({
		initialValues: {
			comment: '',
		},
		validate,
		onSubmit: async values => {
			mutate(values.comment)
		},
	})

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
			className={styles.wrapper}
		>
			<Link to={'/profile'}>
				<img src={API_URL + user.avatar} className={styles.avatar} />
			</Link>

			<form onSubmit={handleSubmit} className={styles.form}>
				<TextareaInput
					{...getFieldProps('comment')}
					onChange={handleChange}
					placeholder='Введите комментарий...'
					maxRows={6}
				></TextareaInput>

				<button className={styles.button} type='submit'>
					<Send className={styles.button__svg}></Send>
				</button>
			</form>
		</motion.div>
	)
}

export default PostCommentForm
