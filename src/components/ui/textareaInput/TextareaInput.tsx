import {
  IObjectSizeInput,
  objectSizeInput
} from 'shared/styles/inputStyles/inputStyles'
import ReactTextareaAutosize, {
  TextareaAutosizeProps
} from 'react-textarea-autosize'
import cn from '@utils/classNames/classNames'

import styles from './TextareaInput.module.scss'

interface ITextareaProps extends TextareaAutosizeProps, IObjectSizeInput {
  isWrong?: boolean
}

const TextareaInput = ({
  size = 'medium',
  isWrong = false,
  minRows = 1,
  className,
  ...props
}: ITextareaProps) => {
  const classNameWrapper = cn(
    [styles.input, objectSizeInput[size], className],
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
