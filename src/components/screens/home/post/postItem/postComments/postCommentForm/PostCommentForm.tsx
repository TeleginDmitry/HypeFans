import React from 'react'
import styles from './PostCommentForm.module.scss'
import TextareaInput from 'components/ui/textareaInput/TextareaInput'
import { useFormik } from 'formik'
import { PostService } from 'services/post/Post.service'
import { IComment } from 'shared/interfaces/post.interface'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { Link } from 'react-router-dom'
import { API_URL } from 'configs/api.config'
import { ReactComponent as Send } from '@assets/images/send.svg'
import { classNames as cn } from 'utils/classNames/classNames'

interface IInitialValues {
	comment: string
}

interface IPostCommentForm {
	post_id: number
	isForModal?: boolean
}

const validate = (values: IInitialValues) => {
	const errors: Partial<IInitialValues> = {}

	if (!values.comment) {
		errors.comment = 'Это поле не должно быть пустым...'
	}

	return errors
}

const PostCommentForm = ({ post_id, isForModal }: IPostCommentForm) => {
	const user = useTypedSelector(state => state.auth.user)


	const classNamesWrapper = isForModal ? cn([styles.wrapper, styles.wrapper_modal]) : styles.wrapper

	const formik = useFormik({
		initialValues: {
			comment: '',
		},
		validate,
		onSubmit: async values => {
			const data = {
				text: values.comment,
				post: post_id,
			}
			const response = await PostService.createComment(data)

			if (response.status === 201) {
				formik.resetForm()
			}
		},
	})

	return (
		<div className={classNamesWrapper}>
			<Link to={'/profile'} className={styles.avatar__container}>
				<img src={API_URL + user.avatar} className={styles.avatar} />
			</Link>

			<form onSubmit={formik.handleSubmit} className={styles.form}>
				<TextareaInput
					onChange={formik.handleChange}
					{...formik.getFieldProps('comment')}
					placeholder='Введите комментарий...'
					maxRows={6}
				></TextareaInput>

				<button className={styles.button} type='submit'>
					<Send className={styles.button__svg}></Send>
				</button>
			</form>
		</div>
	)
}

export default PostCommentForm
