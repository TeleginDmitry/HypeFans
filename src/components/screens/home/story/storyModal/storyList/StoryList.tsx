import { IGetStory } from 'services/story/StoryService.interface'
import { StoryService } from 'services/story/Story.service'
import { STORY_MODAL_KEY } from 'configs/index.config'
import Swiper from 'components/shared/swiper/Swiper'
import usePagination from 'hooks/usePagination'

import StoryItem from './storyItem/StoryItem'

interface IStoryList {
  handlerClose(): void
  story_id: number
}

const StoryList = ({ handlerClose, story_id }: IStoryList) => {
  const {
    fetchPreviousPage,
    hasPreviousPage,
    data: storyList,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError
  } = usePagination({
    queryFn: async ({ pageParam = story_id }) => {
      const params: IGetStory = {
        cursor: pageParam
      }
      const response = await StoryService.getStory(params)
      return response.data
    },
    queryKey: STORY_MODAL_KEY,
    nameParam: 'cursor',
    enabled: !!story_id
  })

  console.log(hasNextPage)

  if (isError) handlerClose()

  if (!storyList?.length) return null

  return (
    // <Slider
    //   swiperProps={{
    //     navigation: {
    //       prevEl: styles.swiper_button_prev,
    //       nextEl: styles.swiper_button_next
    //     },
    //     className: styles.swiper,
    //     modules: [Navigation],
    //     slidesPerView: 1,

    //     spaceBetween: 10
    //   }}
    // >
    //   {storyList.map((story, index) => {
    //     return (
    //       <SwiperSlide className={styles.slide} key={story.id}>
    //         {({ isActive }) => {
    //           // if (!isLoading && hasPreviousPage && isActive && index === 0) {
    //           //   fetchPreviousPage()
    //           // }

    //           // if (
    //           //   !isLoading &&
    //           //   hasNextPage &&
    //           //   isActive &&
    //           //   index === storyList.length - 1
    //           // ) {
    //           //   fetchNextPage()
    //           // }

    //           return <StoryItem story={story}></StoryItem>
    //         }}
    //       </SwiperSlide>
    //     )
    //   })}

    //   <button
    //     className={styles.swiper_button_prev}
    //     onClick={() => fetchPreviousPage()}
    //     disabled={!hasPreviousPage}
    //   >
    //     Назад
    //   </button>
    //   <button
    //     className={styles.swiper_button_next}
    //     onClick={() => fetchNextPage()}
    //     disabled={!hasNextPage}
    //   >
    //     Вперёд
    //   </button>
    // </Slider>

    <Swiper target={storyList}>
      {(story) => {
        return <StoryItem story={story}></StoryItem>
      }}
    </Swiper>
  )
}

export default StoryList
