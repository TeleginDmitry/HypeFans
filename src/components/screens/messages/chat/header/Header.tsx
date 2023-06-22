import { ReactComponent as Points } from '@assets/images/profile/points.svg'
import ShortUserInfo from 'components/shared/shortUserInfo/ShortUserInfo'
import { ReactComponent as Back } from '@assets/images/chat/back.svg'
import React from 'react'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__info}>
        <Back className={styles.header__back}></Back>
        <ShortUserInfo
          username='d1mas1k'
          prefix='@d1mas1k'
          avatar='ss'
        ></ShortUserInfo>
      </div>

      <Points className={styles.header__points}></Points>
    </div>
  )
}

export default Header
