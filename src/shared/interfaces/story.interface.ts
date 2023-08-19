import { ITypeMedia } from './media.interface'
import { IShortUser } from './user.interface'

export interface IStory {
  date_joined: string
  user: IShortUser
  id: number
}

export interface IStoryMedia {
  date_joined: string
  type: ITypeMedia
  media: string
  story: number
  id: number
}

export interface IStoryWithMedia {
  medias: IStoryMedia[]
  date_joined: string
  user: IShortUser
  id: number
}
