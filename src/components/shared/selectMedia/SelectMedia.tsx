import { Microphone, Paperclip, Photo, Clock, Video } from 'icons-hypefans-lib'
import UploadFile from '@ui/uploadFile/UploadFile'
import cn from '@utils/classNames/classNames'
import { ChangeEvent, useState } from 'react'

import styles from './SelectMedia.module.scss'

interface ISelectMedia {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SelectMedia = ({ onChange }: ISelectMedia) => {
  const [isActiveSelect, setIsActiveSelect] = useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.select}>
        <div
          onClick={() => {
            setIsActiveSelect((state) => (state = !state))
          }}
          className={styles.svg__container}
        >
          <Paperclip className={styles.paperclip} size='large'></Paperclip>
        </div>
        <div
          className={cn(
            [styles.select__container],
            [isActiveSelect, styles.select__container_active]
          )}
        >
          <div className={styles.select__content}>
            <div className={styles.select__item}>
              <UploadFile onChange={onChange} accept='image/*' multiple={true}>
                <Photo></Photo>
              </UploadFile>
            </div>
            <div className={styles.select__item}>
              <UploadFile onChange={onChange} accept='video/*' multiple={true}>
                <Video></Video>
              </UploadFile>
            </div>

            <div className={styles.select__item}>
              <Microphone></Microphone>
            </div>

            <div className={styles.select__item}>
              <Clock></Clock>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectMedia
