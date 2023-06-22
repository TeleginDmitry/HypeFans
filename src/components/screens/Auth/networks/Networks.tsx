import instagram from '@assets/images/auth/Instagram.png'
import facebook from '@assets/images/auth/Facebook.png'
import google from '@assets/images/auth/Google.png'
import React from 'react'

import styles from './Networks.module.scss'

export default function Networks() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Войти через</h2>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <img className={styles.list__img} src={google} alt='google' />
        </li>
        <li className={styles.list__item}>
          <img className={styles.list__img} src={facebook} alt='facebook' />
        </li>
        <li className={styles.list__item}>
          <img className={styles.list__img} src={instagram} alt='instagram' />
        </li>
      </ul>
    </div>
  )
}
