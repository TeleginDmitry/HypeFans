import axios, { isAxiosError } from 'axios'

import {
  removeTokensStorage,
  saveTokensStorage,
  getAccessToken
} from '../services/auth/Auth.helper'
import { AuthService } from '../services/auth/Auth.service'
import { API_URL } from '../configs/api.config'

const instance = axios.create({
  // withCredentials: true,
  baseURL: API_URL
})

instance.interceptors.request.use((config) => {
  const accessToken = getAccessToken()

  if (config && config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      error.config._isRetry = true

      try {
        const response = await AuthService.refresh()

        if (response.status === 200) {
          saveTokensStorage(response.data)

          return instance.request(error.config)
        }
      } catch (error) {
        if (isAxiosError(error)) {
          if (error.response.data?.code === 'token_not_valid')
            return removeTokensStorage()
        }
      }
    }
    throw error
  }
)

export default instance
