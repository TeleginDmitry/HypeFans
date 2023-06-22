import { ReactComponent as Search } from '@assets/images/homeHeader/search.svg'
import { ReactComponent as Image } from '@assets/images/newPost/image.svg'
import { ReactComponent as Video } from '@assets/images/newPost/video.svg'
import MediasList from '@components/shared/media/mediaList/MediasList'
import { ReactComponent as Send } from '@assets/images/send.svg'
import TextareaInput from '@ui/textareaInput/TextareaInput'
import { AnimatePresence, motion } from 'framer-motion'
import useViewMedia from '@hooks/useViewUploadMedias'
import UploadFile from '@ui/uploadFile/UploadFile'
import React, { useEffect, useState } from 'react'
import cn from '@utils/classNames/classNames'

import styles from './CreationForm.module.scss'

interface ICreationForm {
  changeStateActive: () => void
}

const CreationForm = ({ changeStateActive }: ICreationForm) => {
  const [valueInput, setValueInput] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const [viewMedias, setViewMedias, handlerMedia] = useViewMedia({
    isInfinity: true
  })

  function handlerInputChange(input: React.ChangeEvent<HTMLTextAreaElement>) {
    setValueInput(input.target.value)
  }

  function handlerUploadviewMedias(input: React.ChangeEvent<HTMLInputElement>) {
    handlerMedia(input.target.files)
  }

  function deleteMedia(id: number) {
    setViewMedias((state) => state.filter((media) => media.id !== id))
  }

  useEffect(() => {
    if (valueInput) setIsVisible(true)
    else setIsVisible(false)
  }, [valueInput])

  return (
    <form className={styles.form}>
      <div
        className={cn(
          [styles.creation],
          [valueInput, styles.creation__padding]
        )}
      >
        <TextareaInput
          placeholder='Хей, о чем ты думаешь?'
          className={styles.creation__input}
          onChange={handlerInputChange}
          value={valueInput}
          minRows={1}
        ></TextareaInput>

        <AnimatePresence>
          {(isVisible || !!viewMedias.length) && (
            <div className={styles.actions}>
              <motion.div
                transition={{ delay: 0 * 0.1 }}
                className={styles.action}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
              >
                <UploadFile onChange={handlerUploadviewMedias} multiple={true}>
                  <Image />
                </UploadFile>
              </motion.div>
              <motion.div
                transition={{ delay: 1 * 0.1 }}
                className={styles.action}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
              >
                <Video />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {!!viewMedias.length && (
          <MediasList
            deleteMedia={deleteMedia}
            medias={viewMedias}
          ></MediasList>
        )}
      </div>
      <div className={styles.icon__container}>
        {isVisible ? (
          <Send className={styles.icon}></Send>
        ) : (
          <Search onClick={changeStateActive} className={styles.icon}></Search>
        )}
      </div>
    </form>
  )
}

export default CreationForm
