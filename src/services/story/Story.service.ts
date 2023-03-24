import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../configs/api.config'
import { IPagination } from '../../shared/interfaces/pagination.interface'
import { IStory } from '../../shared/interfaces/story.interface'

export const StoryService = {
	getStories: async (
		limit: number = 5,
		offset: number = 0
	): Promise<AxiosResponse<IPagination<IStory[]>>> => {
		return axios.get<IPagination<IStory[]>>(`${API_URL}/stories/`, {
			params: {
				limit,
				offset,
			},
		})
	},
	createStory: async (description: string) => {
		return axios.post(`${API_URL}/story/`, { description })
	},
}
