import { IVideoMotion } from 'shared/interfaces/media.interface'
import { motion } from 'framer-motion'

const Video = (props: IVideoMotion) => {
  return <motion.video {...props}></motion.video>
}

export default Video
