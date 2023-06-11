import { IShortUser } from "./user.interface"

export interface IStory {
	id: number
	user: IShortUser
	date_joined: string
}

export interface IStoryMedia {
	id: number
	date_joined: string
	media: string
	story: number
}

export interface IModalStory {
	story: {
		medias: IStoryMedia[]
	} & IStory
	isNext: boolean
	isPrevious: boolean
}
