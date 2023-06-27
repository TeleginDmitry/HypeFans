import ShortUserInfo from 'components/shared/shortUserInfo/ShortUserInfo'
import { DotsVertical, ArrowLeft } from 'icons-hypefans-lib'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__info}>
        <ArrowLeft className={styles.header__back}></ArrowLeft>
        <ShortUserInfo
          username='d1mas1k'
          prefix='@d1mas1k'
          avatar='ss'
        ></ShortUserInfo>
      </div>

      <DotsVertical className={styles.header__points}></DotsVertical>
    </div>
  )
}

export default Header
