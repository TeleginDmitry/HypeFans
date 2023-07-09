import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { PostService } from 'services/post/Post.service'
import { InputProps, Textarea } from 'ui-hypefans-lib'
import { COMMENTS_KEY } from 'configs/index.config'
import { API_URL } from 'configs/api.config'
import { Send } from 'icons-hypefans-lib'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

import styles from './PostCommentForm.module.scss'

interface IPostCommentForm extends InputProps {
  username?: string
  reply_id?: number
  post_id: number
}

const PostCommentForm = ({
  reply_id,
  username,
  post_id,
  size
}: IPostCommentForm) => {
  const [inputValue, setInputValue] = useState('')

  const queryClient = useQueryClient()

  const user = useTypedSelector((state) => state.auth.user)

  const { mutate } = useMutation(
    async (comment: string) => {
      const data = {
        post_id: post_id,
        text: comment
      }

      if (reply_id) {
        data['reply_to'] = reply_id
      }

      const response = await PostService.createComment(data)
      return response.data
    },
    {
      onSuccess: () => {
        setInputValue('')
        queryClient.prefetchInfiniteQuery([COMMENTS_KEY, post_id])
      }
    }
  )

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (inputValue) {
      mutate(inputValue)
    }
  }

  function onChangeInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(event.target.value)
  }

  return (
    <motion.div
      transition={{ duration: 0.3 }}
      className={styles.wrapper}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link className={styles.link} to={'/profile'}>
        <img src={API_URL + user.avatar} className={styles.avatar} />
      </Link>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input__container}>
          <Textarea
            placeholder='Введите комментарий...'
            onChange={onChangeInput}
            value={inputValue}
            maxRows={6}
            size={size}
          ></Textarea>
        </div>

        <button className={styles.button} type='submit'>
          <Send className={styles.button__svg}></Send>
        </button>
      </form>
    </motion.div>
  )
}

export default PostCommentForm
