import { useState, useEffect } from 'react'
import { IPagination } from 'shared/interfaces/pagination.interface'
import { useInfiniteQuery } from '@tanstack/react-query'
import {
	useInView,
	IntersectionObserverProps,
} from 'react-intersection-observer'

interface IUsePagination<T> {
	queryParam?: {}
	initialLimit?: number
	initialOffset?: number
	isInfinity?: boolean
	observerParams?: IntersectionObserverProps
	enabled?: boolean
}

type ICallback<T> = (params: any) => Promise<IPagination<T[]>>

const usePagination = <T>(
	queryKey: (string | number)[],
	callback: ICallback<T>,
	{
		queryParam,
		initialOffset = 0,
		initialLimit = 15,
		isInfinity = false,
		observerParams,
		enabled = true,
	}: IUsePagination<T>
) => {
	const [nextPage, setNextPage] = useState('')
	const [previousPage, setPreviousPage] = useState('')

	function getPageParam(page: string) {
		return page?.split('&')?.reduce((acc, item) => {
			const splitResult = item.split('=')

			acc = splitResult[0] === 'offset' && +splitResult[1]
			return acc
		}, initialOffset)
	}

	const { fetchNextPage, hasNextPage, ...otherPropsQuery } = useInfiniteQuery(
		[queryKey],
		async ({ pageParam = initialOffset }) => {
			const params = {
				limit: initialLimit,
				offset: pageParam,
				...queryParam,
			}
			const response = await callback(params)

			setPreviousPage(response.previous)
			setNextPage(response.next)
			return response.results
		},
		{
			getNextPageParam: () => getPageParam(nextPage),
			getPreviousPageParam: () => getPageParam(previousPage),
			keepPreviousData: true,
			enabled,
		}
	)

	const { ref, inView } = useInView({
		...observerParams,
		skip: !hasNextPage,
	})

	useEffect(() => {
		if (inView) {
			fetchNextPage()
		}
	}, [inView])

	return { ref, fetchNextPage, hasNextPage, ...otherPropsQuery }
}

export default usePagination
