import { Settings as SettingsSvg, ArrowLeft } from 'icons-hypefans-lib'

import styles from './Settings.module.scss'

export default function Settings() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.choosing}>
          <div className={styles.choosing__first}>
            <div className={styles.choosing__navigation}>
              <div className={styles.choosing}>
                <ArrowLeft className={styles.choosing__back}></ArrowLeft>
                <h2 className={styles.choosing__title}>Уведомления</h2>
              </div>
              <SettingsSvg className={styles.choosing__settings}></SettingsSvg>
            </div>
            <ul className={styles.choosing__list}>
              <li className={styles.choosing__item}>Все</li>
              <li className={styles.choosing__item}>Комментарии</li>
              <li className={styles.choosing__item}>Лайки</li>
              <li className={styles.choosing__item}>Подписки</li>
              <li className={styles.choosing__item}>Донаты</li>
            </ul>
          </div>
          <div className={styles.choosing__two}>
            <div className={styles.content}></div>
            <div className={styles.content}></div>
          </div>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
