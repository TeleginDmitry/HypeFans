import { ILimitOffsetPagination } from 'shared/interfaces/pagination.interface'

export interface IGetPostsParams extends ILimitOffsetPagination {
  user_id?: number | string
}

export interface IUploadMedia {
  post_id: number
  media: File
}

export interface ICreateComment {
  post: number
  text: string
}
export interface IGetComments {
  post_id: number | string
  cursor?: string
}

export interface ICreatePost {
  description: string
  user_id: number
}

export interface IPostMediaData {
  post_id: number
  media: File
}

export interface ICreateCommentData {
  reply_to?: number
  post_id: number
  text: string
}

export interface IGetMediasParams {
  post_id: number | string
}

export interface IGetMediaParams {
  post_id: number | string
}

export interface ICreateCommentLikeData {
  comment: number | string
}

export interface IDeleteCommentLikeLink {
  comment: number | string
}
