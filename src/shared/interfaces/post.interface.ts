

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

export interface IPost {
	id: number
	user: IUser
	description: string
	likes: number
	comments: number
	medias?: IMedia[]
	date_joined: string
}

export interface IUploadMedia {
	post_id: number
	media: File
}