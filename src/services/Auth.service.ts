import $api from '../api/axios'
import { API_URL } from '../configs/api.config'
import { AxiosResponse } from 'axios'
import {
	AuthLogin,
	AuthRefresh,
	AuthResponse,
	AuthSignup,
  AuthVerify,
} from '../shared/interfaces/auth.interface'

export const AuthService = {
  
	login: ({
		email,
		password,
	}: AuthLogin): Promise<AxiosResponse<AuthResponse>> => {
		return $api.post<AuthResponse>(`${API_URL}/token/`, { email, password })
	},

	signup: ({
		email,
		password,
		username,
	}: AuthSignup): Promise<AxiosResponse<AuthResponse>> => {
		return $api.post<AuthResponse>(`${API_URL}/token/signup/`, {
			email,
			password,
			username,
		})
	},

	logout: (refresh_token: string): Promise<AxiosResponse> => {
		return $api.post(`${API_URL}/token/logout/`, { refresh_token })
	},

	refresh: (refresh: string): Promise<AxiosResponse<AuthRefresh>> => {
		return $api.post<AuthRefresh>(`${API_URL}/token/refresh/`, { refresh })
	},

	verify: (token: string): Promise<AxiosResponse<AuthVerify>> => {
		return $api.post<AuthVerify>(`${API_URL}/token/verify/`, { token })
	},
}
