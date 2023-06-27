import { useTypedSelector } from 'hooks/useTypedSelector'
import { PROFILE_PAGE } from 'configs/index.config'
import { useNavigate } from 'react-router-dom'
import { API_URL } from 'configs/api.config'

import styles from './MyAvatar.module.scss'

const MyAvatar = () => {
  const navigate = useNavigate()

  const user = useTypedSelector((state) => state.auth.user)

  function onClickAvatar() {
    navigate(`/${PROFILE_PAGE}`)
  }

  return (
    <div className={styles.wrapper} onClick={onClickAvatar}>
      <img
        src={API_URL + user?.avatar}
        className={styles.avatar}
        alt='HypeFans'
      />
    </div>
  )
}

export default MyAvatar
