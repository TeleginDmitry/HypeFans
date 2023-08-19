import { IStoryWithMedia, IStory } from 'shared/interfaces/story.interface'
import { ICursorPagination } from 'shared/interfaces/pagination.interface'
import instance from 'api/api.interceptor'
import { AxiosResponse } from 'axios'

import { IGetStories, IGetStory } from './StoryService.interface'

export const StoryService = {
  getStory: async (
    params?: IGetStory
  ): Promise<AxiosResponse<ICursorPagination<IStoryWithMedia[]>>> => {
    return instance.get<ICursorPagination<IStoryWithMedia[]>>(`story/`, {
      params
    })
  },
  getStories: async (
    params?: IGetStories
  ): Promise<AxiosResponse<ICursorPagination<IStory[]>>> => {
    return instance.get<ICursorPagination<IStory[]>>(`stories/`, {
      params
    })
  },
  createStory: async (description: string) => {
    return instance.post(`stories/`, { description })
  }
}
