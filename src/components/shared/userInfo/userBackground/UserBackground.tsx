import { DotsVertical, ArrowLeft } from 'icons-hypefans-lib'
import { SERVER_URL } from 'configs/api.config'
import { useNavigate } from 'react-router-dom'
import Image from 'components/ui/image/Image'

import styles from './UserBackground.module.scss'

interface IUserBackground {
  background?: string
}

const UserBackground = ({ background }: IUserBackground) => {
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <div className={styles.actions}>
        <ArrowLeft
          onClick={() => {
            navigate(-1)
          }}
          size='large'
        ></ArrowLeft>
        <DotsVertical></DotsVertical>
      </div>
      {background && (
        <Image
          src={`${SERVER_URL}${background}`}
          className={styles.background}
        />
      )}
    </div>
  )
}

export default UserBackground
