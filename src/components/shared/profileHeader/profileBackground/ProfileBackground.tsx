import { ReactComponent as Clear } from '@assets/images/newPost/arrow-left.svg'
import { ReactComponent as Points } from '@assets/images/profile/points.svg'
import { SERVER_URL } from 'configs/api.config'
import { useNavigate } from 'react-router-dom'
import cn from '@utils/classNames/classNames'
import React from 'react'

import styles from './ProfileBackground.module.scss'

interface IProfileBackground {
  background?: string
}

const ProfileBackground = ({ background }: IProfileBackground) => {
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      {background && (
        <div className={styles.background__container}>
          <img
            src={`${SERVER_URL}${background}`}
            className={styles.background}
            alt='HypeFans'
          />
        </div>
      )}
      <Clear
        className={cn(
          [styles.background__back],
          [!background, styles.background__back_color]
        )}
        onClick={() => {
          navigate(-1)
        }}
      ></Clear>
      <Points
        className={cn(
          [styles.background__points],
          [!background, styles.background__points_color]
        )}
      ></Points>
    </div>
  )
}

export default ProfileBackground
