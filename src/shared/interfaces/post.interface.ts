import { IShortUser } from './user.interface'

export interface IPostUser {
	id: number
	username: string
	prefix: string
	avatar: string
}

export interface IPostMediaShort {
	id: number
	media: string
	date_joined: string
}

export interface IPostMedia {
	id: number
	media: string
	date_joined: string
	user: IShortUser
}

export interface IPostComment {
	id: number
	text: string
	date_joined: string
	user: IShortUser
	post: number
	likes: number
	isLiked: boolean
}

export interface IPost {
	id: number
	user: IPostUser
	description: string
	likes: number
	comments: number
	medias?: IPostMediaShort[]
	date_joined: string
	isLiked: boolean
	lastComment: IPostComment | null
}

export interface IPostLike {
	id: number
	date_joined: string
	post: number
	user: number
}

export interface ICommentLike {
	id: number
	user: IShortUser
	date_joined: string
}

export interface IPostSearch {
	id: number
	user: IPostUser
	description: string
	likes: number
	comments: number
	date_joined: string
	is_liked: boolean
}
