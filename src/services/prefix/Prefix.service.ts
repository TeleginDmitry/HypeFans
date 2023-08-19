import { IResponsePrefix } from 'shared/interfaces/prefix.interface'
import instance from 'api/api.interceptor'
import { AxiosResponse } from 'axios'

export const PrefixService = {
  isUniquePrefix: async (
    value: string
  ): Promise<AxiosResponse<IResponsePrefix>> => {
    return instance.get<IResponsePrefix>(`prefix/`, {
      params: {
        value
      }
    })
  }
}
