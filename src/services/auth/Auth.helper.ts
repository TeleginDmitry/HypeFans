import Cookie from 'js-cookie'
import { ACCESS, REFRESH } from '@configs/api.config'
import { ITokens } from 'shared/interfaces/auth.interface'

export const getAccessToken = () => {
	const accessToken = Cookie.get(ACCESS)
	return accessToken || null
}
export const getRefreshToken = () => {
	const refreshToken = Cookie.get(REFRESH)
	return refreshToken || null
}

export const saveTokensStorage = ({ access, refresh }: ITokens) => {
	Cookie.set(ACCESS, access)
	Cookie.set(REFRESH, refresh)
}

export const removeTokensStorage = () => {
	Cookie.remove(ACCESS)
	Cookie.remove(REFRESH)
}
