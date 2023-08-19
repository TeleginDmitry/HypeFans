import styles from './AvatarStyles.module.scss'

export const objectSizeAvatar = {
  medium: styles.medium,
  large: styles.large,
  low: styles.low
}

export interface ObjectSizeAvatarSize {
  size?: 'medium' | 'large' | 'low'
}
