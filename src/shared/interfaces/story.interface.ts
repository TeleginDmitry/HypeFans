import { IShortUser } from './user.interface'

export interface IStory {
  date_joined: string
  user: IShortUser
  id: number
}

export interface IStoryMedia {
  date_joined: string
  story: number
  media: string
  id: number
}

export interface IModalStory {
  story: {
    medias: IStoryMedia[]
  } & IStory
  isPrevious: boolean
  isNext: boolean
}
