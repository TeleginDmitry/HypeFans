import { AxiosResponse } from 'axios'
import { API_URL } from '../../configs/api.config'
import { IPagination } from '../../shared/interfaces/pagination.interface'
import { IStory, IModalStory } from '../../shared/interfaces/story.interface'
import instance from 'api/api.interceptor'

interface IGetStories {
	limit: number
	offset: number
}

interface IGetStory {
	story: number | string
}

export const StoryService = {
	getStories: async (
		params?: IGetStories
	): Promise<AxiosResponse<IPagination<IStory[]>>> => {
		return instance.get<IPagination<IStory[]>>(`${API_URL}/stories/`, {
			params,
		})
	},
	getStoriesById: async (
		story_id: number
	): Promise<AxiosResponse<IStory[]>> => {
		return instance.get<IStory[]>(`${API_URL}/stories/`, {
			params: {
				story: story_id,
			},
		})
	},
	createStory: async (description: string) => {
		return instance.post(`${API_URL}/stories/`, { description })
	},

}
