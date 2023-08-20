import {
  ObjectSizeAvatarSize,
  objectSizeAvatar
} from 'shared/styles/avatarStyles/avatarStyles'
import { IImageMotion } from 'shared/interfaces/media.interface'
import { useNavigate } from 'react-router-dom'
import Image from 'components/ui/image/Image'
import cn from 'utils/classNames/classNames'

import styles from './Avatar.module.scss'

interface IAvatar extends IImageMotion, ObjectSizeAvatarSize {
  to?: string
}

const Avatar = (props: IAvatar) => {
  const { size = 'medium', className, src, to, ...allImageProps } = props

  const navigate = useNavigate()

  function onClickAvatar() {
    if (to) {
      navigate(to)
    }
  }

  if (!src) return null

  return (
    <Image
      {...allImageProps}
      className={cn([styles.avatar, objectSizeAvatar[size]], {
        [styles.avatar__active]: to,
        className: className
      })}
      onClick={onClickAvatar}
      src={src}
    />
  )
}

export default Avatar
