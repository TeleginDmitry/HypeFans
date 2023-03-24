import instance from '../../api/api.interceptor'
import { TOKEN_API, REFRESH, ACCESS } from '@configs/api.config'
import axios, { AxiosResponse } from 'axios'
import {
	ILogin,
	IRegister,
	IUserResponse,
	IResponse,
	ITokens
} from '../../shared/interfaces/auth.interface'
import Cookies from 'js-cookie'



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
		const refreshToken = Cookies.get(REFRESH)

		return instance.post(`${TOKEN_API}/logout/`, {
			refresh_token: refreshToken,
		})
	},

	refresh: async (): Promise<AxiosResponse<ITokens>> => {
		const refreshToken = Cookies.get(REFRESH)

		return await axios.post<ITokens>(
			`${TOKEN_API}/refresh/`,
			{ refresh: refreshToken }
		)
	},

	verify: async (): Promise<AxiosResponse<IUserResponse>> => {
		const accessToken = Cookies.get(ACCESS)
		console.log('3', accessToken)
		return instance.post<IUserResponse>(`${TOKEN_API}/verify/`, {
			token: accessToken,
		})
	},
}

						