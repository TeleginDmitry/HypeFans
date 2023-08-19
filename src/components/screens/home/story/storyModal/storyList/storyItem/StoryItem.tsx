import ShortUserInfo from 'components/shared/shortUserInfo/ShortUserInfo'
import { IStoryWithMedia } from 'shared/interfaces/story.interface'
import Media from 'components/shared/media/Media'
import React from 'react'

import StoryModalForm from './storyItemForm/StoryItemForm'
import styles from './StoryItem.module.scss'

interface IStoryItem {
  story: IStoryWithMedia
}

const StoryItem = ({ story }: IStoryItem) => {
  if (!story) return null

  const { medias, user } = story

  const media = medias[0]

  return (
    <div className={styles.wrapper}>
      <ShortUserInfo
        username={user.username}
        prefix={user.prefix}
        avatar={user.avatar}
      ></ShortUserInfo>
      <Media
        imageProps={{ className: styles.media }}
        videoProps={{ className: styles.media }}
        type={media.type}
        src={media.media}
      ></Media>
      <StoryModalForm></StoryModalForm>
    </div>
  )
}

export default StoryItem
