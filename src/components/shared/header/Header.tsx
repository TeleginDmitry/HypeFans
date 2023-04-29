import styles from './Header.module.scss'
import { ReactComponent as Bell } from '@assets/images/header/bell.svg'
import { ReactComponent as Home } from '@assets/images/header/home.svg'
import { ReactComponent as Message } from '@assets/images/header/message-square.svg'
import { ReactComponent as Plus } from '@assets/images/header/plus-circle.svg'
import { ReactComponent as User } from '@assets/images/header/user.svg'
import { NavLink } from 'react-router-dom'
import uniqid from 'uniqid'

interface IHeaderItem {
	id: number | string
	image: React.ReactElement
	to: string
}

interface IChangingClass {
	isActive: boolean
	isPending: boolean
}

const headerItems: IHeaderItem[] = [
	{
		id: uniqid(),
		image: <Home></Home>,
		to: '/',
	},
	{
		id: uniqid(),
		image: <Bell></Bell>,
		to: '/settings',
	},
	{
		id: uniqid(),
		image: <Plus></Plus>,
		to: '/create',
	},
	{
		id: uniqid(),
		image: <Message></Message>,
		to: '/messages',
	},
	{
		id: uniqid(),
		image: <User></User>,
		to: '/profile',
	},
]

export default function Header() {
	const changeClass = ({ isActive }: IChangingClass) =>
		isActive && styles.active

	return (
		<div className={styles.header}>
			{headerItems.map(item => {
				return (
					<div key={item.id} className={styles.header__item}>
						<NavLink className={changeClass} to={item.to}>
							{item.image}
						</NavLink>
					</div>
				)
			})}
		</div>
	)
}
