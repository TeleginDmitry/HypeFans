import { useState } from 'react'
import { IPagination } from 'shared/interfaces/pagination.interface'
import {
	QueryFunctionContext,
	useInfiniteQuery,
	UseInfiniteQueryOptions,
} from '@tanstack/react-query'
import getValueParamFromQuery from 'utils/getValueParamFromQuery/getValueParamFromQuery'

type ICallback<T> = (options: QueryFunctionContext) => Promise<IPagination<T[]>>

interface IUsePagination<T>
	extends Omit<
		UseInfiniteQueryOptions<IPagination<T[]>>,
		'getNextPageParam' | 'getPreviousPageParam' | 'keepPreviousData' | 'queryFn'
	> {
	nameParam?: string
	queryFn: ICallback<T>
}

const usePagination = <T>(options: IUsePagination<T>) => {
	const { nameParam = 'offset', queryFn: callback, ...queryOptions } = options

	const { data, ...result } = useInfiniteQuery({
		queryFn: async options => {
			const response = await callback(options)

			return response
		},
		getNextPageParam: lastPage =>
			getValueParamFromQuery(lastPage.next, nameParam),
		getPreviousPageParam: lastPage =>
			getValueParamFromQuery(lastPage.previous, nameParam),
		keepPreviousData: true,
		...queryOptions,
	})

	return { data: data ? data.pages.flat() : [], ...result }
}

export default usePagination
