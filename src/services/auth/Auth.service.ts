import {
  IUserResponse,
  IResponse,
  IRegister,
  ITokens,
  ILogin
} from 'shared/interfaces/auth.interface'
import instance, { instanceSimple } from 'api/api.interceptor'
import { TOKEN_API } from '@configs/api.config'
import { AxiosResponse } from 'axios'

import { getRefreshToken } from './Auth.helper'

export const AuthService = {
  register: async ({
    username,
    password,
    email
  }: IRegister): Promise<AxiosResponse<IResponse>> => {
    return instance.post<IResponse>(`${TOKEN_API}/registration/`, {
      username,
      password,
      email
    })
  },

  refresh: async (): Promise<AxiosResponse<ITokens>> => {
    const refreshToken = getRefreshToken()

    return await instanceSimple.post<ITokens>(`${TOKEN_API}/refresh/`, {
      refresh: refreshToken
    })
  },

  logout: async (): Promise<AxiosResponse> => {
    const refreshToken = getRefreshToken()

    return instance.post(`${TOKEN_API}/logout/`, {
      refresh_token: refreshToken
    })
  },

  login: async ({
    password,
    email
  }: ILogin): Promise<AxiosResponse<IResponse>> => {
    return instance.post<IResponse>(`${TOKEN_API}/login/`, { password, email })
  },

  verify: async (): Promise<AxiosResponse<IUserResponse>> => {
    return instance.get<IUserResponse>(`${TOKEN_API}/verify/`)
  }
}
