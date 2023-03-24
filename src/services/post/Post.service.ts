import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../configs/api.config'
import { IPagination } from '../../shared/interfaces/pagination.interface'
import { IPost, IUploadMedia } from '../../shared/interfaces/post.interface'

export const PostService = {
	getPosts: async (limit: number = 5, offset: number = 0): Promise<AxiosResponse<IPagination<IPost[]>>> => {
		return axios.get<IPagination<IPost[]>>(`${API_URL}/posts/`, {
			params: {
				limit,
				offset,
			},
		})
	},
	createPost: async (data: any): Promise<AxiosResponse<IPost>> => {
		return axios.post<IPost>(`${API_URL}/posts/`, data)
	},
	uploadMedia: async (data: IUploadMedia): Promise<AxiosResponse<IPost>> => {
		return axios.post<IPost>(`${API_URL}/post/media/`, data)
	},
}
