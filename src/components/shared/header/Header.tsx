import styles from './Header.module.scss'
import { ReactComponent as Bell } from '@assets/images/header/bell.svg'
import { ReactComponent as Home } from '@assets/images/header/home.svg'
import { ReactComponent as Message } from '@assets/images/header/message-square.svg'
import { ReactComponent as Plus } from '@assets/images/header/plus-circle.svg'
import { ReactComponent as User } from '@assets/images/header/user.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {
	const changeClass = ({
		isActive,
	}: {
		isActive: boolean
		isPending: boolean
	}) => isActive && styles.active

	return (
		<div className={styles.header}>
			<div className={styles.header__item}>
				<NavLink className={changeClass} to={'/'}>
					<Home></Home>
				</NavLink>
			</div>
			<div className={styles.header__item}>
				<NavLink className={changeClass} to={'/settings'}>
					<Bell></Bell>
				</NavLink>
			</div>
			<div className={styles.header__item}>
				<NavLink className={changeClass} to={'/create'}>
					<Plus></Plus>
				</NavLink>
			</div>
			<div className={styles.header__item}>
				<NavLink className={changeClass} to={'/messages'}>
					<Message></Message>
				</NavLink>
			</div>
			<div className={styles.header__item}>
				<NavLink className={changeClass} to={'/profile'}>
					<User></User>
				</NavLink>
			</div>
		</div>
	)
}
