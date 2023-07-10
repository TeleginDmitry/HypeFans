import { IShortUser } from './user.interface'

export interface IPostUser {
  username: string
  avatar: string
  prefix: string
  id: number
}

export interface IPostMediaShort {
  type: 'image' | 'video'
  date_joined: string
  media: string
  id: number
}

export interface IPostMedia {
  type: 'image' | 'video'
  date_joined: string
  user: IShortUser
  media: string
  post: number
  id: number
}

export interface ICommentMedia {
  type: 'image' | 'video'
  date_joined: string
  user: IShortUser
  media: string
  post: number
  id: number
}

export interface IPostComment {
  medias: ICommentMedia[]
  reply?: IPostComment[]
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
