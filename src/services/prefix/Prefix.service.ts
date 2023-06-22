import { instanceSimple } from 'api/api.interceptor'
import { AxiosResponse } from 'axios'

import { IResponsePrefix } from '../../shared/interfaces/prefix.interface'

export const PrefixService = {
  isUniquePrefix: async (
    value: string
  ): Promise<AxiosResponse<IResponsePrefix>> => {
    return instanceSimple.get<IResponsePrefix>(`prefix/`, {
      params: {
        value
      }
    })
  }
}
