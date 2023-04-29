import { AxiosResponse } from 'axios'
import { API_URL } from '../../configs/api.config'
import { IPagination } from '../../shared/interfaces/pagination.interface'
import { IComment, ILike, IPost } from '../../shared/interfaces/post.interface'
import {
	ICreateComment,
	IGetPosts,
	IUploadMedia,
	IGetComments,
} from './PostService.interface'
import instance from 'api/api.interceptor'

export const PostService = {
	getPosts: async (
		params: IGetPosts
	): Promise<AxiosResponse<IPagination<IPost[]>>> => {
		return instance.get(`${API_URL}/posts/`, {
			params,
		})
	},
	createPost: async (data: any): Promise<AxiosResponse<IPost>> => {
		return instance.post(`${API_URL}/posts/`, data)
	},
	uploadMedia: async (data: IUploadMedia): Promise<AxiosResponse<IPost>> => {
		return instance.post(`${API_URL}/posts/medias/`, data)
	},

	createLike: async (post_id: number): Promise<AxiosResponse<ILike>> => {
		return instance.post(`${API_URL}/posts/likes/`, { post: post_id })
	},
	deleteLike: async (post_id: number): Promise<AxiosResponse<void>> => {
		return instance.delete(`${API_URL}/posts/likes/${post_id}/`)
	},
	getComments: async (
		params: IGetComments
	): Promise<AxiosResponse<IPagination<IComment[]>>> => {
		return instance.get(`${API_URL}/posts/comments/`, { params })
	},
	createComment: async (
		data: ICreateComment
	): Promise<AxiosResponse<IComment>> => {
		return instance.post(`${API_URL}/posts/comments/`, data)
	},
	deleteComment: async (comment_id: number): Promise<AxiosResponse<void>> => {
		return instance.delete(`${API_URL}/posts/comments/${comment_id}/`)
	},
}
