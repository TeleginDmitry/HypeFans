import {
  SETTINGS_PAGE,
  MESSAGES_PAGE,
  CREATION_PAGE,
  PROFILE_PAGE,
  HOME_PAGE
} from 'configs/index.config'
import { ReactComponent as Message } from '@assets/images/header/message-square.svg'
import { ReactComponent as Plus } from '@assets/images/header/plus-circle.svg'
import { ReactComponent as Home } from '@assets/images/header/home.svg'
import { ReactComponent as Bell } from '@assets/images/header/bell.svg'
import { ReactComponent as User } from '@assets/images/header/user.svg'
import generateId from 'utils/generateId/GenerateId'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.scss'

interface IHeaderItem {
  image: React.ReactElement
  id: number | string
  to: string
}

interface IChangingClass {
  isPending: boolean
  isActive: boolean
}

const headerItems: IHeaderItem[] = [
  {
    image: <Home></Home>,
    id: generateId(),
    to: HOME_PAGE
  },
  {
    to: `/${SETTINGS_PAGE}`,
    image: <Bell></Bell>,
    id: generateId()
  },
  {
    to: `/${CREATION_PAGE}`,
    image: <Plus></Plus>,
    id: generateId()
  },
  {
    image: <Message></Message>,
    to: `/${MESSAGES_PAGE}`,
    id: generateId()
  },
  {
    to: `/${PROFILE_PAGE}`,
    image: <User></User>,
    id: generateId()
  }
]

export default function Header() {
  const changeClass = ({ isActive }: IChangingClass) =>
    isActive && styles.active

  return (
    <div className={styles.header}>
      {headerItems.map((item) => {
        return (
          <div className={styles.header__item} key={item.id}>
            <NavLink className={changeClass} to={item.to}>
              {item.image}
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}
