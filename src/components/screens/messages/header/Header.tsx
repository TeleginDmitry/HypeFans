import { ArrowLeft, Plus } from 'icons-hypefans-lib'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__flex}>
        <ArrowLeft className={styles.header__svg}></ArrowLeft>
        <h2 className={styles.header__title}>Сообщения</h2>
      </div>
      <div className={styles.header__flex}>
        <Plus className={styles.header__svg}></Plus>
      </div>
    </div>
  )
}

export default Header
