import { MAX_LENGTH_LETTER_FOR_INPUT, COMMENTS_KEY } from 'configs/index.config'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import useViewUploadMedias from 'hooks/useViewUploadMedias'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { PostService } from 'services/post/Post.service'
import { InputProps, Textarea } from 'ui-hypefans-lib'
import cn from 'utils/classNames/classNames'
import { API_URL } from 'configs/api.config'
import { Send } from 'icons-hypefans-lib'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

import PostCommentFormActions from './postCommentFormActions/PostCommentFormActions'
import PostCommentFormMedias from './postCommentFormMedias/PostCommentFormMedias'
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

  const [medias, setMedias, handlerMedia] = useViewUploadMedias({
    isInfinity: true
  })

  const queryClient = useQueryClient()

  const user = useTypedSelector((state) => state.auth.user)

  const { mutate: createMedia } = useMutation(
    async (comment_id: number) => {
      medias.forEach(async (media) => {
        const formData = new FormData()
        formData.append('media', media.upload)
        formData.append('type', media.type)
        formData.append('comment', comment_id.toString())

        await PostService.createCommentMedia(formData)
      })
    },
    {
      onSuccess: () => {
        queryClient.prefetchInfiniteQuery([COMMENTS_KEY, post_id])
        setMedias([])
      }
    }
  )

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
      onSuccess: ({ id }) => {
        if (medias.length) {
          createMedia(id)
        } else {
          queryClient.prefetchInfiniteQuery([COMMENTS_KEY, post_id])
        }
        setInputValue('')
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

  function onClickEmoji(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const target = event.target as HTMLLIElement
    setInputValue((state) => state + target.innerText)
  }

  const classTextarea = cn(
    [styles.textarea],
    [inputValue.length > MAX_LENGTH_LETTER_FOR_INPUT, styles.textarea__font]
  )

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
        <div className={styles.content}>
          <div className={styles.input__container}>
            <Textarea
              placeholder='Введите комментарий...'
              labelClassName={styles.label}
              className={classTextarea}
              onChange={onChangeInput}
              value={inputValue}
              maxRows={6}
              size={size}
            ></Textarea>
            <PostCommentFormActions
              handlerMedia={handlerMedia}
              onClickEmoji={onClickEmoji}
            ></PostCommentFormActions>
          </div>

          <PostCommentFormMedias
            setMedias={setMedias}
            medias={medias}
          ></PostCommentFormMedias>
        </div>

        <button className={styles.button} type='submit'>
          <Send></Send>
        </button>
      </form>
    </motion.div>
  )
}

export default PostCommentForm
