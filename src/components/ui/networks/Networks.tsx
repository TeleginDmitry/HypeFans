import { networksData } from './networks.data'
import styles from './Networks.module.scss'

export default function Networks() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Войти через</h2>
      <ul className={styles.list}>
        {networksData.map(({ src, alt, id }) => {
          return (
            <li className={styles.list__item} key={id}>
              <img className={styles.list__img} src={src} alt={alt} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
