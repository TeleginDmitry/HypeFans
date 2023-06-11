import React from 'react'
import styles from './Agreement.module.scss'

const Agreement = () => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.agreement}>
				Войдя в систему, вы соглашаетесь с нашими{' '}
				<a href='' className={styles.link}>
					Условиями предоставления услуг
				</a>{' '}
				и{' '}
				<a href='' className={styles.link}>
					Политикой конфиденциальности
				</a>{' '}
				и подтверждаете, что вам не менее 18 лет.
			</p>
		</div>
	)
}

export default Agreement
