import { AxiosResponse } from 'axios'
import { IQueryPagination } from 'shared/interfaces/pagination.interface'

export interface IGetPostsParams extends IQueryPagination {
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
	user_id: number
	description: string
}

export interface IPostMediaData {
	media: File
	post_id: number
}

export interface ICreateCommentData {
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
