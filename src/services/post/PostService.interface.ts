import { IQueryPagination } from 'shared/interfaces/pagination.interface'

export interface IGetPosts extends IQueryPagination {
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
export interface IGetComments extends IQueryPagination {
	post_id?: number | string
}
