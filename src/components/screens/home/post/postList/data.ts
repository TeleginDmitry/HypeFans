import avatar from '@assets/images/auth/DevPost/logo.png'
import media from '@assets/images/auth/DevPost/image.png'
import { IPost } from '../posts.interface'

export const posts: IPost[] = [
	{
		id: 1,
		user: {
			id: 1,
			username: 'd1mas1k',
			prefix: '@d1mas1k',
			avatar: 'https://logos-download.com/wp-content/uploads/2016/11/EA_logo_Electronic_Arts.png',
		},
		description:
			'Сняли перчатки, поскольку чемпион по боксу @TonyBellew присоединился к нам на HypeFans 🥊 Он предлагает возможность присоединиться к нему за пределами ринга. Вы можете отследить невиданные ранее кадры фитнеса и тренировок, а также взглянуть на его образ жизни. Так что дайте ему лучший шанс на: http://hypefans.com/tonybellew',
		count_likes: 1003,
		count_comments: 20,
		medias: [
			{
				id: 1,
				media: 'https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg',
			},
		],
		time_create: '20 минут назад',
	},
	{
		id: 2,
		user: {
			id: 2,
			username: 'd1mas1k',
			prefix: '@d1mas1k',
			avatar: 'https://logos-download.com/wp-content/uploads/2016/11/EA_logo_Electronic_Arts.png',
		},
		description:
			'Сняли перчатки, поскольку чемпион по боксу @TonyBellew присоединился к нам на HypeFans 🥊 Он предлагает возможность присоединиться к нему за пределами ринга. Вы можете отследить невиданные ранее кадры фитнеса и тренировок, а также взглянуть на его образ жизни. Так что дайте ему лучший шанс на: http://hypefans.com/tonybellew',
		count_likes: 1003,
		count_comments: 20,
		medias: [
			{
				id: 2,
				media: 'https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg',
			},
		],

		time_create: '20 минут назад',
	},
	{
		id: 3,
		user: {
			id: 3,
			username: 'd1mas1k',
			prefix: '@d1mas1k',
			avatar: 'https://logos-download.com/wp-content/uploads/2016/11/EA_logo_Electronic_Arts.png',
		},
		description:
			'Сняли перчатки, поскольку чемпион по боксу @TonyBellew присоединился к нам на HypeFans 🥊 Он предлагает возможность присоединиться к нему за пределами ринга. Вы можете отследить невиданные ранее кадры фитнеса и тренировок, а также взглянуть на его образ жизни. Так что дайте ему лучший шанс на: http://hypefans.com/tonybellew',
		count_likes: 1003,
		count_comments: 20,
		medias: [
			{
				id: 3,
				media: 'https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg',
			},
		],

		time_create: '20 минут назад',
	},
]
