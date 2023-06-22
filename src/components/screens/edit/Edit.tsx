import { ReactComponent as Clear } from '@assets/images/newPost/arrow-left.svg'
import { ReactComponent as Points } from '@assets/images/profile/points.svg'
import { ReactComponent as Camera } from '@assets/images/edit/camera.svg'
import useViewUploadMedias from 'hooks/useViewUploadMedias'
import { useTypedSelector } from 'hooks/useTypedSelector'
import UploadFile from '@ui/uploadFile/UploadFile'
import { useNavigate } from 'react-router-dom'
import { API_URL } from 'configs/api.config'
import React from 'react'

import EditForm from './editForm/EditForm'
import styles from './Edit.module.scss'

const Edit = () => {
  const navigate = useNavigate()

  const { isAuth, user } = useTypedSelector((state) => state.auth)

  const [inputFileAvatar, setInputFileAvatar, handlerMediaAvatar] =
    useViewUploadMedias()
  const firstFileAvatar = inputFileAvatar?.[0]

  const [inputFileBackground, setInputFileBackground, handlerMediaBackground] =
    useViewUploadMedias()
  const firstFileBackground = inputFileBackground?.[0]

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.user__medias}>
          <div className={styles.background__container}>
            {(firstFileBackground?.view || user?.background) && (
              <img
                src={firstFileBackground?.view || API_URL + user?.background}
                className={styles.background}
                alt='HypeFans'
              />
            )}

            <Clear
              onClick={() => {
                navigate(-1)
              }}
              className={styles.background__back}
            ></Clear>
            <Points className={styles.background__points}></Points>
            <UploadFile
              onChange={({ target }) => handlerMediaBackground(target.files)}
              wrapperClass={styles.wrapper__camera}
            >
              <Camera className={styles.camera}></Camera>
            </UploadFile>
          </div>
          <div className={styles.avatar__content}>
            <img
              src={firstFileAvatar?.view || API_URL + user?.avatar}
              className={styles.avatar}
              alt='HypeFans'
            />
            <UploadFile
              onChange={({ target }) => handlerMediaAvatar(target.files)}
              wrapperClass={styles.wrapper__camera}
            >
              <Camera className={styles.camera}></Camera>
            </UploadFile>
          </div>
        </div>
        <div className={styles.form__container}>
          {isAuth && (
            <EditForm
              background={firstFileBackground?.upload}
              avatar={firstFileAvatar?.upload}
            ></EditForm>
          )}
        </div>
      </div>
    </div>
  )
}

export default Edit
