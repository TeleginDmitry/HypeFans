import { AxiosResponse } from 'axios'
import { IPagination } from 'shared/interfaces/pagination.interface'
import {
	IPostComment,
	IPostLike,
	IPost,
	IPostSearch,
	IPostMedia,
} from 'shared/interfaces/post.interface'
import {
	ICreateComment,
	IGetPostsParams,
	IUploadMedia,
	IGetComments,
	ICreatePost,
	IPostMediaData,
	ICreateCommentData,
	IGetMediasParams,
	IGetMediaParams,
	ICreateCommentLikeData,
	IDeleteCommentLikeLink,
} from './PostService.interface'
import instance from 'api/api.interceptor'

export const PostService = {
	getPosts: async (
		params: IGetPostsParams
	): Promise<AxiosResponse<IPagination<IPost[]>>> => {
		return instance.get(`posts/`, {
			params,
		})
	},
	getPostsSearch: async (
		description: string
	): Promise<AxiosResponse<IPostSearch[]>> => {
		return instance.get(`posts/`, {
			params: {
				search: description,
			},
		})
	},
	getPost: async (post_id: number | string): Promise<AxiosResponse<IPost>> => {
		return instance.get(`post/${post_id}/`)
	},
	createPost: async (data: ICreatePost): Promise<AxiosResponse<IPost>> => {
		return instance.post(`posts/`, data)
	},
	deletePost: async (post_id: number): Promise<AxiosResponse<void>> => {
		return instance.delete(`post/${post_id}/`)
	},
	uploadMedia: async (data: IUploadMedia): Promise<AxiosResponse<IPost>> => {
		return instance.post(`posts/medias/`, data)
	},

	createLike: async (post_id: number): Promise<AxiosResponse<IPostLike>> => {
		return instance.post(`post/likes/`, { post: post_id })
	},
	deleteLike: async (post_id: number): Promise<AxiosResponse<void>> => {
		return instance.delete(`post/like/${post_id}/`)
	},
	createCommentLike: async (data: ICreateCommentLikeData) => {
		return instance.post('post/comment/likes/', data)
	},
	deleteCommentLike: async ({
		comment,
	}: IDeleteCommentLikeLink): Promise<AxiosResponse<void>> => {
		return instance.delete(`post/comment/like/${comment}/`)
	},
	getComments: async (
		params: IGetComments
	): Promise<AxiosResponse<IPagination<IPostComment[]>>> => {
		return instance.get(`post/comments/`, { params })
	},
	createComment: async (
		data: ICreateCommentData
	): Promise<AxiosResponse<IPostComment>> => {
		return instance.post(`post/comments/`, data)
	},
	deleteComment: async (comment_id: number): Promise<AxiosResponse<void>> => {
		return instance.delete(`post/comment/${comment_id}/`)
	},

	// TEST
	// getMedias: async (
	// 	params: IGetMediasParams
	// ): Promise<AxiosResponse<IPostMedia[]>> => {
	// 	return instanceSimple.get(`post/medias/`, { params })
	// },
	getMedias: async (
		params: IGetMediaParams
	): Promise<AxiosResponse<IPostMedia[]>> => {
		return instance.get(`post/medias/`, { params })
	},
	createMedia: async (data: any): Promise<AxiosResponse<IPostMedia>> => {
		return instance.post(`post/medias/`, data)
	},
	deleteMedia: async (post_id: number): Promise<AxiosResponse<void>> => {
		return instance.delete(`post/media/${post_id}/`)
	},
}
