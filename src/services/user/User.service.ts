import instance from 'api/api.interceptor'
import { AxiosResponse } from 'axios'
import { IUser, IChangeUser } from 'shared/interfaces/user.interface'

export const UserService = {
	getUser: async (id: number | string): Promise<AxiosResponse<IUser>> => {
		return instance.get<IUser>(`user/${id}/`)
	},
	changeUser: async ({
		id,
		data,
	}: IChangeUser): Promise<AxiosResponse<IUser>> => {
		return instance.patch<IUser>(`user/${id}/`, data)
	},
}
