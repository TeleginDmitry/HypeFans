import { useState } from 'react'

type callbackType<T> = (...args: any[]) => Promise<T>

export const useFetching = <T>(callback: callbackType<T>) => {
	const [data, setData] = useState<T>()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [isError, setIsError] = useState(false)

	const fetchQuery = async (...args) => {
		try {
			setIsLoading(true)
			const response = await callback(...args)
			setData(response)
			return response
		} catch (e) {
			setError(e.message)
			setIsError(true)
		} finally {
			setIsLoading(false)
		}
	}

	return { data, fetchQuery, isLoading, error, isError }
}
