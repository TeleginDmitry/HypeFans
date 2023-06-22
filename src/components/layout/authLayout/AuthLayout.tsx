import background from '@assets/images/auth/background.jpg'
import logo from '@assets/images/auth/logo.png'
import { Outlet } from 'react-router-dom'
import React from 'react'

import styles from './AuthLayout.module.scss'

export function AuthLayout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background__content}>
        <img className={styles.background} src={background} alt='HypeFans' />
      </div>
      <div className={styles.content}>
        <div className={styles.logo__content}>
          <img
            className={styles.logo}
            draggable={false}
            alt='HypeFans'
            src={logo}
          />
        </div>
        <Outlet />
      </div>
    </div>
  )
}
