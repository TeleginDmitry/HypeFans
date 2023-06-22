import Header from '@components/shared/header/Header'
import { Outlet } from 'react-router-dom'

import Preview from '../../shared/preview/Preview'
import styles from './Layout.module.scss'

export function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <div className={styles.content}>
        <Outlet />
      </div>
      <Preview></Preview>
    </div>
  )
}
