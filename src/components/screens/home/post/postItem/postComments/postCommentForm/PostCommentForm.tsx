import { IObjectSizeInput } from 'shared/styles/inputStyles/inputStyles'
import TextareaInput from 'components/ui/textareaInput/TextareaInput'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { POST_LIST_KEY, COMMENTS_KEY } from 'configs/index.config'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { PostService } from 'services/post/Post.service'
import { API_URL } from 'configs/api.config'
import { Send } from 'icons-hypefans-lib'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useFormik } from 'formik'

import styles from './PostCommentForm.module.scss'

interface IInitialValues {
  comment: string
}

interface IPostCommentForm extends IObjectSizeInput {
  post_id: number
}

const validate = (values: IInitialValues) => {
  const errors: Partial<IInitialValues> = {}

  if (!values.comment) {
    errors.comment = 'Это поле не должно быть пустым...'
  }

  return errors
}

const PostCommentForm = ({ post_id, size }: IPostCommentForm) => {
  const queryClient = useQueryClient()

  const user = useTypedSelector((state) => state.auth.user)

  const { mutate } = useMutation(
    async (comment: string) => {
      const data = {
        post_id: post_id,
        text: comment
      }
      const response = await PostService.createComment(data)
      return response.data
    },
    {
      onSuccess: () => {
        resetForm()
        queryClient.prefetchInfiniteQuery([COMMENTS_KEY, post_id])
        queryClient.invalidateQueries(POST_LIST_KEY)
      }
    }
  )

  const { getFieldProps, handleChange, handleSubmit, resetForm } = useFormik({
    onSubmit: async (values) => {
      mutate(values.comment)
    },
    initialValues: {
      comment: ''
    },
    validate
  })

  return (
    <motion.div
      transition={{ duration: 0.3 }}
      className={styles.wrapper}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link to={'/profile'}>
        <img src={API_URL + user.avatar} className={styles.avatar} />
      </Link>

      <form onSubmit={handleSubmit} className={styles.form}>
        <TextareaInput
          {...getFieldProps('comment')}
          placeholder='Введите комментарий...'
          onChange={handleChange}
          maxRows={6}
          size={size}
        ></TextareaInput>

        <button className={styles.button} type='submit'>
          <Send className={styles.button__svg}></Send>
        </button>
      </form>
    </motion.div>
  )
}

export default PostCommentForm
