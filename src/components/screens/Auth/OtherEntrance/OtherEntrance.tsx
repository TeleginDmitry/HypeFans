import React from 'react'
import facebook from '@assets/images/auth/Facebook.png'
import google from '@assets/images/auth/Google.png'
import instagram from '@assets/images/auth/Instagram.png'
import styles from './OtherEntrance.module.scss'

export default function OtherEntrance() {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Войти через</h2>
			<ul className={styles.list}>
				<li className={styles.list__item}>
					<img className={styles.list__img} src={google} alt='HypeFans' />
				</li>
				<li className={styles.list__item}>
					<img className={styles.list__img} src={facebook} alt='HypeFans' />
				</li>
				<li className={styles.list__item}>
					<img className={styles.list__img} src={instagram} alt='HypeFans' />
				</li>
			</ul>

			<div className={styles.agreement__container}>
				<p className={styles.agreement}>
					Войдя в систему, вы соглашаетесь с нашими{' '}
					<a href='' className={styles.agreement__style}>
						Условиями предоставления услуг
					</a>{' '}
					и{' '}
					<a href='' className={styles.agreement__style}>
						Политикой конфиденциальности
					</a>{' '}
					и подтверждаете, что вам не менее 18 лет.
				</p>
			</div>
		</div>
	)
}
