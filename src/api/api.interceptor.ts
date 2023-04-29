import axios from 'axios'
import { API_URL } from '../configs/api.config'
import {
	getAccessToken,
	removeTokensStorage,
	saveTokensStorage,
} from '../services/auth/Auth.helper'
import { AuthService } from '../services/auth/Auth.service'
import { errorCatch, getContentType } from './api.helper'

const instance = axios.create({
	// withCredentials: true,
	baseURL: API_URL,
	// headers: getContentType(),
})

instance.interceptors.request.use(config => {
	const accessToken = getAccessToken()
	console.log(accessToken)

	if (config && config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			error.response.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				const response = await AuthService.refresh()

				if (response?.data) {
					console.log('1', response.data)

					saveTokensStorage(response.data)
				}

				console.log('2', response.data)

				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'token_not_valid') removeTokensStorage()
			}
		}
		throw error
	}
)

export default instance
