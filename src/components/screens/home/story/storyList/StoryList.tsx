import { STORY_LIST_KEY, STORIES_LIMIT } from 'configs/index.config'
import { StoryService } from 'services/story/Story.service'
import { IStory } from 'shared/interfaces/story.interface'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { useInView } from 'react-intersection-observer'
import Slider from 'components/shared/slider/Slider'
import usePagination from 'hooks/usePagination'
import { SwiperSlide } from 'swiper/react'
import React, { useEffect } from 'react'

import { StoryItem } from '../storyItem/StoryItem'
import styles from './StoryList.module.scss'
import MyStory from './myStory/MyStory'

export default function StoryList() {
  const isAuth = useTypedSelector((state) => state.auth.isAuth)

  const {
    data: paginatedStories,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading
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

  const { inView, ref } = useInView({
    rootMargin: '0px 60px 0px 0px',
    skip: !hasNextPage
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <div onClick={() => fetchNextPage()} className={styles.wrapper}>
      <Slider swiperProps={{ slidesPerView: 'auto', spaceBetween: 10 }}>
        {isAuth && (
          <div className={styles.my_story} slot='wrapper-start'>
            <MyStory></MyStory>
          </div>
        )}
        {paginatedStories.map(({ results }) => {
          return results.map((story) => {
            return (
              <SwiperSlide className={styles.slide}>
                <StoryItem key={story.id} story={story}></StoryItem>
              </SwiperSlide>
            )
          })
        })}

        <div className={styles.observer} slot='wrapper-end' ref={ref}></div>
      </Slider>
    </div>
  )
}
