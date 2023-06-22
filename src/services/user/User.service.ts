import { IChangeUser, IUser } from 'shared/interfaces/user.interface'
import instance from 'api/api.interceptor'
import { AxiosResponse } from 'axios'

export const UserService = {
  changeUser: async ({
    data,
    id
  }: IChangeUser): Promise<AxiosResponse<IUser>> => {
    return instance.patch<IUser>(`user/${id}/`, data)
  },
  getUser: async (id: number | string): Promise<AxiosResponse<IUser>> => {
    return instance.get<IUser>(`user/${id}/`)
  }
}
