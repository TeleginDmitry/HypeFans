import styles from './Agreement.module.scss'

const Agreement = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.agreement}>
        Войдя в систему, вы соглашаетесь с нашими{' '}
        <a className={styles.link} href=''>
          Условиями предоставления услуг
        </a>{' '}
        и{' '}
        <a className={styles.link} href=''>
          Политикой конфиденциальности
        </a>{' '}
        и подтверждаете, что вам не менее 18 лет.
      </p>
    </div>
  )
}

export default Agreement
