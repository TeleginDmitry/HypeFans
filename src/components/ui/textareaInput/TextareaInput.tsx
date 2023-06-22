import ReactTextareaAutosize, {
  TextareaAutosizeProps
} from 'react-textarea-autosize'
import cn from '@utils/classNames/classNames'
import React from 'react'

import styles from './TextareaInput.module.scss'

interface ITextareaProps extends TextareaAutosizeProps {
  isWrong?: boolean
}

const TextareaInput = ({
  isWrong = false,
  minRows = 1,
  className,
  ...props
}: ITextareaProps) => {
  const classNameWrapper = cn(
    [styles.input, className],
    [isWrong, styles.wrong]
  )

  return (
    <ReactTextareaAutosize
      className={classNameWrapper}
      minRows={minRows}
      {...props}
    />
  )
}

export default TextareaInput
