import { ImageOrVideoProps } from 'components/shared/imageOrVideo/ImageOrVideo.interface'
import ImageOrVideo from 'components/shared/imageOrVideo/ImageOrVideo'
import { MotionProps, motion } from 'framer-motion'
import cn from 'utils/classNames/classNames'

import styles from './Media.module.scss'

interface IMedia {
  mediaProps: ImageOrVideoProps
  children?: React.ReactElement
  motionProps?: MotionProps
  classWrapper?: string
}

export default function Media({
  classWrapper,
  motionProps,
  mediaProps,
  children
}: IMedia) {
  return (
    <motion.div
      {...motionProps}
      className={cn([styles.item], [!!classWrapper, classWrapper])}
    >
      <ImageOrVideo {...mediaProps}></ImageOrVideo>
      {children}
    </motion.div>
  )
}
