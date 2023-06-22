import { ITokens } from 'shared/interfaces/auth.interface'
import { REFRESH, ACCESS } from '@configs/api.config'
import Cookie from 'js-cookie'

export const getAccessToken = () => {
  const accessToken = Cookie.get(ACCESS)
  return accessToken || null
}
export const getRefreshToken = () => {
  const refreshToken = Cookie.get(REFRESH)
  return refreshToken || null
}

export const saveTokensStorage = ({ refresh, access }: ITokens) => {
  Cookie.set(ACCESS, access)
  Cookie.set(REFRESH, refresh)
}

export const removeTokensStorage = () => {
  Cookie.remove(ACCESS)
  Cookie.remove(REFRESH)
}
