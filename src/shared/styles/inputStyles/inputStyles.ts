import styles from './InputStyles.module.scss'

export const objectSizeInput = {
  medium: styles.medium,
  low: styles.low
}

export interface IObjectSizeInput {
  size?: 'medium' | 'low'
}
