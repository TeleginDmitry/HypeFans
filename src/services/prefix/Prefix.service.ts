import { AxiosResponse } from 'axios'
import { IResponsePrefix } from '../../shared/interfaces/prefix.interface'
import { instanceSimple } from 'api/api.interceptor'

export const PrefixService = {
	isUniquePrefix: async (
		value: string
	): Promise<AxiosResponse<IResponsePrefix>> => {
		return instanceSimple.get<IResponsePrefix>(`prefix/`, {
			params: {
				value,
			},
		})
	},
}
