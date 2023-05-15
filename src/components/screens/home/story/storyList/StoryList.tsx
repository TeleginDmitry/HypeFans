import React from 'react'
import styles from './StoryList.module.scss'
import { StoryItem } from '../storyItem/StoryItem'
import { IStory } from 'shared/interfaces/story.interface'
import { StoryService } from 'services/story/Story.service'
import Modal from 'components/ui/modal/Modal'
import StoryModal from '../storyModal/StoryModal'
import Slider from 'components/shared/slider/Slider'
import { useSearchParams } from 'react-router-dom'
import { STORY_PARAM } from 'configs/index.config'
import usePagination from 'hooks/usePagination'



const storyList: IStory[] = [
  {
    id: 1,
    user: {
      avatar: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612271795_116-p-krasivii-fioletovii-fon-dlya-rabochego-sto-158.jpg",
      id: 1,
      prefix: "@user1"
    },
    date_joined: "2022-01-01",
    is_my_story: false
  },
  {
    id: 2,
    user: {
      avatar: "https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-7.jpg",
      id: 2,
      prefix: "@user2"
    },
    date_joined: "2022-02-02",
    is_my_story: false
  },
  {
    id: 3,
    user: {
      avatar: "https://cojo.ru/wp-content/uploads/2023/01/krasivyi-zakat-17-1.webp",
      id: 3,
      prefix: "@user3"
    },
    date_joined: "2022-03-03",
    is_my_story: false
  },
  {
    id: 4,
    user: {
      avatar: "https://www.fonstola.ru/pic/201504/1920x1080/fonstola.ru_171682.jpg",
      id: 4,
      prefix: "@user4"
    },
    date_joined: "2022-04-04",
    is_my_story: false
  },
  {
    id: 5,
    user: {
      avatar: "https://proprikol.ru/wp-content/uploads/2021/10/krasivye-foto-26.jpg",
      id: 5,
      prefix: "@user5"
    },
    date_joined: "2022-05-05",
    is_my_story: false
  },
  {
    id: 6,
    user: {
      avatar: "https://vsegda-pomnim.com/uploads/posts/2022-05/1651447214_79-vsegda-pomnim-com-p-samie-krasivie-vodopadi-foto-84.jpg",
      id: 6,
      prefix: "@user6"
    },
    date_joined: "2022-06-06",
    is_my_story: false
  },
  {
    id: 7,
    user: {
      avatar: "https://img5.goodfon.ru/wallpaper/original/f/93/most-ozero-zakat-2.jpg",
      id: 7,
      prefix: "@user7"
    },
    date_joined: "2022-07-07",
    is_my_story: false
  },
  {
    id: 8,
    user: {
      avatar: "https://mobimg.b-cdn.net/v3/fetch/ef/effb2f7eb99603d2cb16bdb11eebf1e3.jpeg",
      id: 8,
      prefix: "@user8"
    },
    date_joined: "2022-08-08",
    is_my_story: false
  },
  {
    id: 9,
    user: {
      avatar: "https://www.ejin.ru/wp-content/uploads/2019/05/vodopad-seljalandsfoss-islandija.jpg",
      id: 9,
      prefix: "@user9"
    },
    date_joined: "2022-09-09",
    is_my_story: false
  },
  {
    id: 10,
    user: {
      avatar: "https://w-dog.ru/wallpapers/10/9/463314880930454/ozero-gory-les-zakat-derevya.jpg",
      id: 10,
      prefix: "@user10"
    },
    date_joined: "2022-10-10",
    is_my_story: false
  },
  {
    id: 11,
    user: {
      avatar: "https://avatars.mds.yandex.net/i?id=46e8c19caa5b2935f1c6f54a5e5c5d51fac449a9-8974491-images-thumbs&n=13",
      id: 11,
      prefix: "@user11"
    },
    date_joined: "2022-11-11",
    is_my_story: false
  },
  {
    id: 12,
    user: {
      avatar: "https://wp-s.ru/wallpapers/10/12/434755555995923/zakat-nad-morskim-brizom.jpg",
      id: 12,
      prefix: "@user12"
    },
    date_joined: "2022-12-12",
    is_my_story: false
  },
  {
    id: 13,
    user: {
      avatar: "https://w-dog.ru/wallpapers/10/12/537392690692133/raj-na-zemle-kally.jpg",
      id: 13,
      prefix: "@user13"
    },
    date_joined: "2023-01-01",
    is_my_story: false
	}]




export default function StoryList() {
	const [searchParams, setSearchParams] = useSearchParams()

	// const {
	// 	data: storyList,
	// 	isLoading,
	// 	fetchNextPage,
	// 	hasNextPage,
	// 	ref,
	// 	isFetching,
	// } = usePagination<IStory>(
	// 	['stories'],
	// 	async params => {
	// 		const response = await StoryService.getStories(params)
	// 		return response.data
	// 	},
	// 	{
	// 		// observerParams: { rootMargin: '0px 60px 0px 0px' },
	// 	}
	// )

	function handlerClose() {
		searchParams.delete(STORY_PARAM)
		setSearchParams(searchParams)
	}

	return (
		<div 
		// onClick={() => fetchNextPage()}
		 className={styles.wrapper}>
			<div className={styles.container}>
				<Slider<IStory>
					SwiperSlideProps={{ className: styles.slider }}
					SwiperProps={{
						slidesPerView: 'auto',
						spaceBetween: 10,
					}}
					// dataList={storyList?.pages.flat()}
					dataList={storyList}
				>
					{(story) => {
						return <StoryItem story={story}></StoryItem>
					}}
				</Slider>
			</div>

			<Modal
				isVisible={searchParams.has(STORY_PARAM)}
				handlerClose={handlerClose}
			>
				<StoryModal></StoryModal>
			</Modal>
		</div>
	)
}
