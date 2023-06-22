import instance from 'api/api.interceptor'
import { AxiosResponse } from 'axios'

import { IPagination } from '../../shared/interfaces/pagination.interface'
import { IStory } from '../../shared/interfaces/story.interface'

interface IGetStories {
  offset: number
  limit: number
}

export const StoryService = {
  getStories: async (
    params?: IGetStories
  ): Promise<AxiosResponse<IPagination<IStory[]>>> => {
    return instance.get<IPagination<IStory[]>>(`stories/`, {
      params
    })
  },
  createStory: async (description: string) => {
    return instance.post(`stories/`, { description })
  }
}
