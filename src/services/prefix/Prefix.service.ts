import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../configs/api.config'
import { IResponsePrefix } from '../../shared/interfaces/prefix.interface'

export const PrefixService = {
	isUniquePrefix: async (
		value: string
	): Promise<AxiosResponse<IResponsePrefix>> => {
		return axios.get<IResponsePrefix>(`${API_URL}/prefix/`, {
			params: {
				value,
			},
		})
	},
}
