import instance, { instanceSimple } from 'api/api.interceptor'
import { TOKEN_API } from '@configs/api.config'
import { AxiosResponse } from 'axios'
import {
	ILogin,
	IRegister,
	IUserResponse,
	IResponse,
	ITokens,
} from 'shared/interfaces/auth.interface'
import { getRefreshToken, getAccessToken } from './Auth.helper'

export const AuthService = {
	login: async ({
		email,
		password,
	}: ILogin): Promise<AxiosResponse<IResponse>> => {
		return instance.post<IResponse>(`${TOKEN_API}/login/`, { email, password })
	},

	register: async ({
		email,
		password,
		username,
	}: IRegister): Promise<AxiosResponse<IResponse>> => {
		return instance.post<IResponse>(`${TOKEN_API}/registration/`, {
			email,
			password,
			username,
		})
	},

	logout: async (): Promise<AxiosResponse> => {
		const refreshToken = getRefreshToken()

		return instance.post(`${TOKEN_API}/logout/`, {
			refresh_token: refreshToken,
		})
	},

	refresh: async (): Promise<AxiosResponse<ITokens>> => {
		const refreshToken = getRefreshToken()

		return await instanceSimple.post<ITokens>(`${TOKEN_API}/refresh/`, {
			refresh: refreshToken,
		})
	},

	verify: async (): Promise<AxiosResponse<IUserResponse>> => {
		return instance.get<IUserResponse>(`${TOKEN_API}/verify/`)
	},
}
