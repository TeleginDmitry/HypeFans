import React from 'react'
import { ReactComponent as Back } from "@assets/images/chat/back.svg";
import { ReactComponent as Points } from "@assets/images/profile/points.svg";
import styles from './Header.module.scss'
import ShortUserInfo from 'components/shared/shortUserInfo/ShortUserInfo';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__info}>
        <Back className={styles.header__back}></Back>
        <ShortUserInfo avatar='ss' username='d1mas1k' prefix='@d1mas1k'></ShortUserInfo>
      </div>

      <Points className={styles.header__points}></Points>
     
    </div>
  )
}

export default Header