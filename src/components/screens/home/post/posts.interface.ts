interface IUser {
	id: number
	username: string
	prefix: string
	avatar: string
}

interface IMedia {
	id: number
	media: string
}

export interface IPost {
	id: number
	user: IUser
	description: string
	count_likes: number
	count_comments: number
	medias: IMedia[]
	time_create: string
}


export interface IPostList {
  posts: IPost[]
}
