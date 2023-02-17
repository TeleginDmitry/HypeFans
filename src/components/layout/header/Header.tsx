import styles from './Header.module.scss'
import { ReactComponent as Bell } from '@assets/images/header/bell.svg'
import { ReactComponent as Home } from '@assets/images/header/home.svg'
import { ReactComponent as Message } from '@assets/images/header/message-square.svg'
import { ReactComponent as Plus } from '@assets/images/header/plus-circle.svg'
import { ReactComponent as User } from '@assets/images/header/user.svg'

export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.header__item}><Home></Home></div>
			<div className={styles.header__item}><Bell></Bell></div>
			<div className={styles.header__item}><Plus></Plus></div>
			<div className={styles.header__item}><Message></Message></div>
      <div className={styles.header__item}><User></User></div>
		</div>
	)
}
