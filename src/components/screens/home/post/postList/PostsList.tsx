import styles from './PostsList.module.scss'
import PostItem from '../postItem/PostItem'
import Loader from '@ui/loader/Loader'
import { IPagination } from 'shared/interfaces/pagination.interface'
import { IPost } from 'shared/interfaces/post.interface'
import { PostService } from 'services/post/Post.service'
import PostsLoader from 'components/shared/postsLoader/PostsLoader'
import usePagination from 'hooks/usePagination'
import Modal from 'components/ui/modal/Modal'
import { useSearchParams } from 'react-router-dom'
import { POST_PARAM } from 'configs/index.config'
import PostModal from '../postModal/PostModal'

const posts: IPost[] = [
	{
		id: 1,
		user: {
			id: 1,
			username: 'user1',
			prefix: '@user 1',
			avatar: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612271795_116-p-krasivii-fioletovii-fon-dlya-rabochego-sto-158.jpg',
		},
		description: 'Post 1 description',
		likes: 10,
		comments: 5,
		medias: [
			{
				id: 1,
				media: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612271795_116-p-krasivii-fioletovii-fon-dlya-rabochego-sto-158.jpg',
				date_joined: '2022-01-01',
			},
		],
		date_joined: '2022-01-01',
		is_liked: false,
		lastComment: {
			id: 1,
			text: 'Comment 1',
			date_joined: '2022-01-01',
			user: {
				id: 2,
				username: 'user2',
				prefix: '@user 2',
				avatar: 'https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-7.jpg',
			},
		},
	},
	{
		id: 2,
		user: {
			id: 2,
			username: 'user2',
			prefix: '@user 2',
			avatar: 'https://cojo.ru/wp-content/uploads/2023/01/krasivyi-zakat-17-1.webp',
		},
		description: 'Post 2 description',
		likes: 15,
		comments: 7,
		medias: [
			{
				id: 2,
				media: 'https://www.fonstola.ru/pic/201504/1920x1080/fonstola.ru_171682.jpg',
				date_joined: '2022-02-02',
			},
			{
				id: 3,
				media: 'https://proprikol.ru/wp-content/uploads/2021/10/krasivye-foto-26.jpg',
				date_joined: '2022-02-02',
			},
		],
		date_joined: '2022-02-02',
		is_liked: false,
		lastComment: null,
	},
	{
		id: 3,
		user: {
			id: 3,
			username: 'user3',
			prefix: '@user 3',
			avatar: 'https://vsegda-pomnim.com/uploads/posts/2022-05/1651447214_79-vsegda-pomnim-com-p-samie-krasivie-vodopadi-foto-84.jpg',
		},
		description: 'Post 3 description',
		likes: 20,
		comments: 8,
		medias: [
			{
				id: 4,
				media: 'https://cojo.ru/wp-content/uploads/2023/01/krasivyi-zakat-17-1.webp',
				date_joined: '2022-03-03',
			},
		],
		date_joined: '2022-03-03',
		is_liked: false,
		lastComment: {
			id: 2,
			text: 'Comment 2',
			date_joined: '2022-03-03',
			user: {
				id: 1,
				username: 'user1',
				prefix: '@user 1',
				avatar: 'https://img5.goodfon.ru/wallpaper/original/f/93/most-ozero-zakat-2.jpg',
			},
		},
	},
	{
		id: 4,
		user: {
			id: 4,
			username: 'user4',
			prefix: '@user 4',
			avatar: 'https://img5.goodfon.ru/wallpaper/original/f/93/most-ozero-zakat-2.jpg',
		},
		description: 'Post 4 description',
		likes: 8,
		comments: 3,
		medias: [
			{
				id: 5,
				media: 'https://mobimg.b-cdn.net/v3/fetch/ef/effb2f7eb99603d2cb16bdb11eebf1e3.jpeg',
				date_joined: '2022-04-04',
			},
		],
		date_joined: '2022-04-04',
		is_liked: false,
		lastComment: {
			id: 2,
			text: 'Comment 2',
			date_joined: '2022-03-03',
			user: {
				id: 1,
				username: 'user1',
				prefix: '@user 1',
				avatar: 'https://mobimg.b-cdn.net/v3/fetch/ef/effb2f7eb99603d2cb16bdb11eebf1e3.jpeg',
			},
		},
	},
	{
    id: 5,
    user: {
      id: 5,
      username: "user5",
      prefix: "@user 5",
      avatar: "https://www.ejin.ru/wp-content/uploads/2019/05/vodopad-seljalandsfoss-islandija.jpg"
    },
    description: "Post 5 description",
    likes: 12,
    comments: 6,
    medias: [
      {
        id: 6,
        media: "https://www.ejin.ru/wp-content/uploads/2019/05/vodopad-seljalandsfoss-islandija.jpg",
        date_joined: "2022-05-05"
      }
    ],
    date_joined: "2022-05-05",
    is_liked: false,
    lastComment: {
      id: 4,
      text: "Comment 4",
      date_joined: "2022-05-05",
      user: {
        id: 1,
        username: "user1",
        prefix: "@user 1",
        avatar: "https://w-dog.ru/wallpapers/10/9/463314880930454/ozero-gory-les-zakat-derevya.jpg"
      }
    }
  },
  {
    id: 6,
    user: {
      id: 6,
      username: "user6",
      prefix: "@user 6",
      avatar: "https://avatars.mds.yandex.net/i?id=46e8c19caa5b2935f1c6f54a5e5c5d51fac449a9-8974491-images-thumbs&n=13"
    },
    description: "Post 6 description",
    likes: 18,
    comments: 9,
    medias: [
      {
        id: 7,
        media: "https://avatars.mds.yandex.net/i?id=46e8c19caa5b2935f1c6f54a5e5c5d51fac449a9-8974491-images-thumbs&n=13",
        date_joined: "2022-06-06"
      }
    ],
    date_joined: "2022-06-06",
    is_liked: false,
    lastComment: null
  },
  {
    id: 7,
    user: {
      id: 7,
      username: "user7",
      prefix: "@user 7",
      avatar: "https://wp-s.ru/wallpapers/10/12/434755555995923/zakat-nad-morskim-brizom.jpg"
    },
    description: "Post 7 description",
    likes: 14,
    comments: 5,
    medias: [
      {
        id: 8,
        media: "https://wp-s.ru/wallpapers/10/12/434755555995923/zakat-nad-morskim-brizom.jpg",
        date_joined: "2022-07-07"
      }
    ],
    date_joined: "2022-07-07",
    is_liked: false,
    lastComment: {
      id: 5,
      text: "Comment 5",
      date_joined: "2022-07-07",
      user: {
        id: 2,
        username: "user2",
        prefix: "@user 2",
        avatar: "https://w-dog.ru/wallpapers/10/12/537392690692133/raj-na-zemle-kally.jpg"
      }
    }
  },
	{
    id: 8,
    user: {
      id: 7,
      username: "User8",
      prefix: "@userr 8",
      avatar: "https://vsegda-pomnim.com/uploads/posts/2022-05/1651447214_79-vsegda-pomnim-com-p-samie-krasivie-vodopadi-foto-84.jpg"
    },
    description: "Post 8 description",
    likes: 44,
    comments: 2,
    medias: [
      {
        id: 8,
        media: "https://proprikol.ru/wp-content/uploads/2021/10/krasivye-foto-26.jpg",
        date_joined: "2022-07-07"
      }
    ],
    date_joined: "2022-07-07",
    is_liked: false,
    lastComment: {
      id: 5,
      text: "Comment 5",
      date_joined: "2022-07-07",
      user: {
        id: 2,
        username: "user2",
        prefix: "@userr 2",
        avatar: "https://proprikol.ru/wp-content/uploads/2021/10/krasivye-foto-26.jpg"
      }
    }
  },
	{
    id: 9,
    user: {
      id: 7,
      username: "user9",
      prefix: "@userr 9",
      avatar: "https://img5.goodfon.ru/wallpaper/original/f/93/most-ozero-zakat-2.jpg"
    },
    description: "Post 9 description",
    likes: 71,
    comments: 5,
    medias: [
      {
        id: 8,
        media: "https://img5.goodfon.ru/wallpaper/original/f/93/most-ozero-zakat-2.jpg",
        date_joined: "2022-07-07"
      }
    ],
    date_joined: "2022-07-07",
    is_liked: false,
    lastComment: {
      id: 5,
      text: "Comment 5",
      date_joined: "2022-07-07",
      user: {
        id: 2,
        username: "user2",
        prefix: "@userr 2",
        avatar: "https://mobimg.b-cdn.net/v3/fetch/ef/effb2f7eb99603d2cb16bdb11eebf1e3.jpeg"
      }
    }
  },
	{
    id: 10,
    user: {
      id: 7,
      username: "user10",
      prefix: "@userr 10",
      avatar: "https://wp-s.ru/wallpapers/10/12/434755555995923/zakat-nad-morskim-brizom.jpg"
    },
    description: "Post 10 description",
    likes: 14,
    comments: 5,
    medias: [
      {
        id: 8,
        media: "https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-7.jpg",
        date_joined: "2022-07-07"
      }
    ],
    date_joined: "2022-07-07",
    is_liked: false,
    lastComment: {
      id: 5,
      text: "Comment 5",
      date_joined: "2022-07-07",
      user: {
        id: 2,
        username: "user2",
        prefix: "@userr 2",
        avatar: "https://cojo.ru/wp-content/uploads/2023/01/krasivyi-zakat-17-1.webp"
      }
    }
  },
]

interface IPostsList {
	user_id?: number | string
}

export default function PostsList({ user_id }: IPostsList) {
	const [searchParams, setSearchParams] = useSearchParams()
	const post_id = searchParams.get(POST_PARAM)

	// const {
	// 	data: postList,
	// 	isLoading,
	// 	fetchNextPage,
	// 	hasNextPage,
	// 	ref,
	// 	isFetching,
	// } = usePagination<IPost>(
	// 	['posts'],
	// 	async (params): Promise<IPagination<IPost[]>> => {
	// 		const response = await PostService.getPosts(params)
	// 		return response.data
	// 	},
	// 	{
	// 		initialLimit: 10,
	// 		isInfinity: true,
	// 		queryParam: { user_id },
	// 	}
	// )

	function handlerClose() {
		searchParams.delete(POST_PARAM)
		setSearchParams(searchParams)
	}

	return (
		<div className={styles.posts__list}>
			{posts.map(post => {
				return <PostItem key={post.id} post={post}></PostItem>
			})}
			{/* <div className={styles.posts__observer} ref={ref}></div> */}
			{/* {isFetching && <PostsLoader />} */}

			{/* {!isLoading && !postList?.pages?.length && (
				<h2 className={styles.title__exist}>
					У пользователя не существует ни одного поста!
				</h2>
			)} */}

			<Modal
				isVisible={searchParams.has(POST_PARAM)}
				handlerClose={handlerClose}
			>
				<PostModal post_id={post_id}></PostModal>
			</Modal>
		</div>
	)
}
