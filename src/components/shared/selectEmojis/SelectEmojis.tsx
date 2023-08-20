import { emojis } from 'shared/emojis'
import React from 'react'

import styles from './SelectEmojis.module.scss'

interface ISelectEmojis {
  onClickEmoji?(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void
}

const SelectEmojis = ({ onClickEmoji }: ISelectEmojis) => {
  return (
    <ul className={styles.wrapper}>
      {emojis.map(({ emojis, title }) => {
        return (
          <li className={styles.item} key={title}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.list}>
              {emojis.map((emoji) => {
                return (
                  <li
                    className={styles.emoji}
                    onClick={onClickEmoji}
                    key={emoji}
                  >
                    {emoji}
                  </li>
                )
              })}
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

export default SelectEmojis
