import styles from './Header.module.scss'
import { ReactComponent as Bell } from '@assets/images/header/bell.svg'
import { ReactComponent as Home } from '@assets/images/header/home.svg'
import { ReactComponent as Message } from '@assets/images/header/message-square.svg'
import { ReactComponent as Plus } from '@assets/images/header/plus-circle.svg'
import { ReactComponent as User } from '@assets/images/header/user.svg'
import {
	CREATION_PAGE,
	HOME_PAGE,
	MESSAGES_PAGE,
	PROFILE_PAGE,
	SETTINGS_PAGE,
} from 'configs/index.config'
import { NavLink } from 'react-router-dom'
import generateId from 'utils/generateId/GenerateId'

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
		id: generateId(),
		image: <Home></Home>,
		to: HOME_PAGE,
	},
	{
		id: generateId(),
		image: <Bell></Bell>,
		to: `/${SETTINGS_PAGE}`,
	},
	{
		id: generateId(),
		image: <Plus></Plus>,
		to: `/${CREATION_PAGE}`,
	},
	{
		id: generateId(),
		image: <Message></Message>,
		to: `/${MESSAGES_PAGE}`,
	},
	{
		id: generateId(),
		image: <User></User>,
		to: `/${PROFILE_PAGE}`,
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
