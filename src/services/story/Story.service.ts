import { AxiosResponse } from 'axios'
import { IPagination } from '../../shared/interfaces/pagination.interface'
import { IStory, IModalStory } from '../../shared/interfaces/story.interface'
import instance from 'api/api.interceptor'

interface IGetStories {
	limit: number
	offset: number
}

export const StoryService = {
	getStories: async (
		params?: IGetStories
	): Promise<AxiosResponse<IPagination<IStory[]>>> => {
		return instance.get<IPagination<IStory[]>>(`stories/`, {
			params,
		})
	},
	createStory: async (description: string) => {
		return instance.post(`stories/`, { description })
	},
}
