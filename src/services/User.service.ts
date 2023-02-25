import $api from '../api/axios'
import { API_URL } from '../configs/api.config'
import { AxiosResponse } from 'axios'
import { IUser } from '../shared/interfaces/user.interface'

export const UserService = {
	getUser: (id: number): Promise<AxiosResponse<IUser>> => {
		return $api.get<IUser>(`${API_URL}/user/${id}`)
	},
}
