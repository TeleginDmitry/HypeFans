import styles from './AvatarStyles.module.scss'

export const objectSizeAvatar = {
  medium: styles.medium,
  low: styles.low
}

export interface ObjectSizeAvatarSize {
  size?: 'medium' | 'low'
}
