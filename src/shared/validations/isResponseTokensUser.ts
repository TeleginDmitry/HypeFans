import { IResponse } from 'shared/interfaces/auth.interface'
import { isObject } from './isObject'

export function isResponseTokensUser(response: unknown): response is IResponse {
	if (!isObject(response)) return false

	if (
		'access' in response &&
		typeof response['access'] === 'string' &&
		'refresh' in response &&
		typeof response['refresh'] === 'string' &&
		'user' in response &&
		typeof response['user'] === 'object'
	) {
		return true
	}
	return false
}
