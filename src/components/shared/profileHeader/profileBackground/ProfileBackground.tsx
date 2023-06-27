import { DotsVertical, ArrowLeft } from 'icons-hypefans-lib'
import { SERVER_URL } from 'configs/api.config'
import { useNavigate } from 'react-router-dom'
import cn from '@utils/classNames/classNames'

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
      <div className={styles.actions}>
        <ArrowLeft
          onClick={() => {
            navigate(-1)
          }}
        ></ArrowLeft>
        <DotsVertical></DotsVertical>
      </div>
    </div>
  )
}

export default ProfileBackground
