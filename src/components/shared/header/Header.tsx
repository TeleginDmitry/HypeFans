import { NavLink } from 'react-router-dom'

import { headerItems } from './Header.data'
import styles from './Header.module.scss'

interface IChangingClass {
  isPending: boolean
  isActive: boolean
}

export default function Header() {
  const changeClass = ({ isActive }: IChangingClass) =>
    isActive && styles.active

  return (
    <div className={styles.header}>
      {headerItems.map(({ Icon, id, to }) => {
        return (
          <NavLink className={changeClass} key={id} to={to}>
            {Icon}
          </NavLink>
        )
      })}
    </div>
  )
}
