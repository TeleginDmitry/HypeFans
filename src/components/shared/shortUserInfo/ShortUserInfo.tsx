import Image from 'components/ui/image/Image'
import React, { memo } from 'react'

import styles from './ShortUserInfo.module.scss'

interface IShortUserInfo {
  onClick?: React.MouseEventHandler<HTMLDivElement>
  username: string
  prefix: string
  avatar: string
}

const ShortUserInfo = ({
  username,
  onClick,
  prefix,
  avatar
}: IShortUserInfo) => {
  return (
    <div className={styles.short} onClick={onClick}>
      <Image className={styles.avatar} draggable={false} src={avatar} />
      <div className={styles.user__container}>
        <h2 className={styles.user__username}>{username}</h2>
        <span className={styles.user__prefix}>{prefix}</span>
      </div>
    </div>
  )
}

export default memo(ShortUserInfo)
