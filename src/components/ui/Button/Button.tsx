import React, { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>  {
    children: string,
    isDisabled?: boolean,
}


export default function Button({children, isDisabled=false, type='submit', ...props}: IButton) {
  return (
    <button type={type} disabled={isDisabled} className={styles.button} {...props}>{children}</button>
  )
}
