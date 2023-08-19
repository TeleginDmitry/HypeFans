import ObserverElement from 'components/shared/observerElement/ObserverElement'
import { ComponentWithAuthorized } from 'hocs/ComponentWithAuthorized'
import { STORY_LIST_KEY, STORIES_LIMIT } from 'configs/index.config'
import { StoryService } from 'services/story/Story.service'
import { IStory } from 'shared/interfaces/story.interface'
import Swiper from 'components/shared/swiper/Swiper'
import usePagination from 'hooks/usePagination'
import React from 'react'

import { StoryItem } from '../storyItem/StoryItem'
import StoryModal from '../storyModal/StoryModal'
import styles from './StoryList.module.scss'
import MyStory from './myStory/MyStory'

export default function StoryList() {
  const {
    data: storyList,
    fetchNextPage,
    hasNextPage
  } = usePagination<IStory>({
    queryFn: async ({ pageParam = 0 }) => {
      const params = {
        limit: STORIES_LIMIT,
        offset: pageParam
      }
      const response = await StoryService.getStories(params)
      return response.data
    },
    queryKey: STORY_LIST_KEY
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Swiper
          afterElements={
            <ObserverElement
              onVisible={() => fetchNextPage()}
              className={styles.observer}
              skip={!hasNextPage}
            ></ObserverElement>
          }
          countViewElements={{
            740: 6,
            650: 5,
            500: 4,
            400: 3,
            200: 2,
            0: 1
          }}
          beforeElements={
            <ComponentWithAuthorized>
              <MyStory></MyStory>
            </ComponentWithAuthorized>
          }
          target={storyList}
        >
          {(story) => {
            return <StoryItem key={story.id} story={story}></StoryItem>
          }}
        </Swiper>
      </div>
      <StoryModal></StoryModal>
    </div>
  )
}
