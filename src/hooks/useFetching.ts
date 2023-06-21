import React, { useState, useRef } from 'react'
import { AxiosError } from 'axios'

type ICallback<T> = (...args: any[]) => Promise<T>

interface IFetching<T> {
	onSuccess?: (data: T) => void
	onError?: (error: AxiosError) => void
	condition?: boolean
	callback?: ICallback<T>
}

const useFetching = <T>({
	onError,
	onSuccess,
	condition = true,
	callback,
}: IFetching<T> = {}) => {
	const [data, setData] = useState<T>()
	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setSuccess] = useState(false)
	const [error, setError] = useState<AxiosError | undefined>(undefined)
	const latestQueryArgsRef = useRef<ICallback<T>>()

	async function handlerQuery(queryFunc: ICallback<T>) {
		if (!condition) return

		try {
			setIsLoading(true)
			const response = await queryFunc()
			setData(response)
			onSuccess?.(response)
			latestQueryArgsRef.current = queryFunc
			setSuccess(true)
		} catch (error) {
			if (error instanceof AxiosError) {
				setError(error)
				onError?.(error)
				setSuccess(false)
			}
		} finally {
			setIsLoading(false)
		}
	}
	async function fetchQuery(...args: any[]) {
		if (callback) {
			await handlerQuery(() => callback(...args))
		}
	}

	const refetch = async () => {
		await handlerQuery(latestQueryArgsRef.current)
	}

	return {
		data: data,
		handlerQuery,
		isLoading,
		error,
		refetch,
		fetchQuery,
		isSuccess,
	}
}

export default useFetching
