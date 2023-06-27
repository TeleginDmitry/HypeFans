import {
  ObjectSizeAvatarSize,
  objectSizeAvatar
} from 'shared/styles/avatarStyles/avatarStyles'
import { useNavigate } from 'react-router-dom'
import cn from 'utils/classNames/classNames'

import styles from './Avatar.module.scss'

interface IAvatar extends ObjectSizeAvatarSize {
  avatar: string
  to?: string
}

const Avatar = (props: IAvatar) => {
  const { size = 'medium', avatar, to } = props

  const navigate = useNavigate()

  function onClickAvatar() {
    if (to) {
      navigate(to)
    }
  }

  if (!avatar) return null

  return (
    <div
      className={cn([styles.wrapper], [!!to, styles.wrapper__cursor])}
      onClick={onClickAvatar}
    >
      <img
        className={cn([styles.avatar, objectSizeAvatar[size]])}
        src={avatar}
      />
    </div>
  )
}

export default Avatar
