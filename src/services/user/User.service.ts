import instance from 'api/api.interceptor'
import { API_URL } from 'configs/api.config'
import { AxiosResponse } from 'axios'
import { IUser, IChangeUser } from 'shared/interfaces/user.interface'

export const UserService = {
	getUser: async (id: number | string): Promise<AxiosResponse<IUser>> => {
		return instance.get<IUser>(`${API_URL}/user/${id}/`)
	},
	changeUser: async ({
		id,
		data,
	}: IChangeUser): Promise<AxiosResponse<IUser>> => {
		return instance.patch<IUser>(`${API_URL}/user/${id}/`, data)
	},
}
