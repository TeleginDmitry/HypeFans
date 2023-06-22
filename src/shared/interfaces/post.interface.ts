import { IShortUser } from './user.interface'

export interface IPostUser {
  username: string
  avatar: string
  prefix: string
  id: number
}

export interface IPostMediaShort {
  date_joined: string
  media: string
  id: number
}

export interface IPostMedia {
  date_joined: string
  user: IShortUser
  media: string
  id: number
}

export interface IPostComment {
  date_joined: string
  isLiked: boolean
  user: IShortUser
  likes: number
  post: number
  text: string
  id: number
}

export interface IPost {
  lastComment: IPostComment | null
  medias?: IPostMediaShort[]
  date_joined: string
  description: string
  isLiked: boolean
  comments: number
  user: IPostUser
  likes: number
  id: number
}

export interface IPostLike {
  date_joined: string
  user: number
  post: number
  id: number
}

export interface ICommentLike {
  date_joined: string
  user: IShortUser
  id: number
}

export interface IPostSearch {
  date_joined: string
  description: string
  is_liked: boolean
  comments: number
  user: IPostUser
  likes: number
  id: number
}
