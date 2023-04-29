import { IShortUser } from './user.interface'

interface IUser {
	id: number
	username: string
	prefix: string
	avatar: string
}

interface IMedia {
	id: number
	media: string
	date_joined: string
}

export interface ILike {
	id: number
	date_joined: string
	post: number
	user: number
}

export interface IComment {
	id: number
	text: string
	date_joined: string
	user: IShortUser
}

export interface IPost {
	id: number
	user: IUser
	description: string
	likes: number
	comments: number
	medias?: IMedia[]
	date_joined: string
	is_liked: boolean
	lastComment: IComment | null
}
