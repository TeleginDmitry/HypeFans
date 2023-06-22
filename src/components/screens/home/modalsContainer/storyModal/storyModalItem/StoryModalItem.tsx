import ShortUserInfo from 'components/shared/shortUserInfo/ShortUserInfo'
import { IStory } from 'shared/interfaces/story.interface'
import React from 'react'

import StoryModalForm from './storyModalForm/StoryModalForm'
import styles from './StoryModalItem.module.scss'

interface IStoryModalItem {
  story: IStory
}

const StoryModalItem = ({ story }: IStoryModalItem) => {
  if (!story) return null

  const { user } = story

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ShortUserInfo
          username={user.username}
          prefix={user.prefix}
          avatar={user.avatar}
        ></ShortUserInfo>
        <StoryModalForm></StoryModalForm>
      </div>
    </div>
  )
}

export default StoryModalItem
