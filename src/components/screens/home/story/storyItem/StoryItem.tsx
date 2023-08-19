import { IStory } from 'shared/interfaces/story.interface'
import { STORY_PARAM } from 'configs/index.config'
import { useNavigate } from 'react-router-dom'
import Image from 'components/ui/image/Image'
import { motion } from 'framer-motion'
import React from 'react'
import 'swiper/css'

import styles from './StoryItem.module.scss'

interface IStoryItem {
  story: IStory
}

export const StoryItem = ({ story }: IStoryItem) => {
  const { date_joined, user, id } = story

  const navigation = useNavigate()

  function handlerClickStory(story_id: number) {
    navigation(`/?${STORY_PARAM}=${story_id}`)
  }

  return (
    <motion.div
      // onClick={() => handlerClickStory(id)}
      transition={{ duration: 0.5 }}
      className={styles.story}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className={styles.avatar__container}>
        <Image className={styles.avatar} src={user.avatar} />
      </div>
      <span className={styles.prefix}>{user.prefix}</span>
    </motion.div>
  )
}
