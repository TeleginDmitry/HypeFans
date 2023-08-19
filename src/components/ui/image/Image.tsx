import { IImageMotion } from 'shared/interfaces/media.interface'
import { motion } from 'framer-motion'

const Image = (props: IImageMotion) => {
  return <motion.img {...props} />
}

export default Image
