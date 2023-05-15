import { useState, useEffect, useCallback } from 'react'
import { IPagination } from 'shared/interfaces/pagination.interface'
import { useInView, IntersectionOptions } from 'react-intersection-observer'
import getValueParamFromQuery from 'utils/getValueParamFromQuery/getValueParamFromQuery'
import useFetching from './useFetching'

interface IPaginationCustom<T> {
	queryParam?: {}
	initialLimit?: number
	initialOffset?: number
	initialState?: T[]
	isInfinity?: boolean
	observerParams?: IntersectionOptions
	condition?: boolean
}

type ICallback<T> = (params: any) => Promise<IPagination<T[]>>

const usePaginationCustom = <T>(
	callback: ICallback<T>,
	{
		queryParam,
		initialOffset = 0,
		initialLimit = 15,
		initialState = [],
		isInfinity = false,
		observerParams,
		condition = true,
	}: IPaginationCustom<T> = {}
) => {
	const [limit, setLimit] = useState(initialLimit)
	const [offset, setOffset] = useState(initialOffset)
	const [hasNextPage, setHasNextPage] = useState(false)
	const [hasPreviousPage, setHasPreviousPage] = useState(false)
	const [totalCount, setTotalCount] = useState(0)
	const [data, setData] = useState<T[]>(initialState)
	const [isFirstQuery, setFirstQuery] = useState(true)

	const { handlerQuery, ...otherQueryProps } = useFetching<T[]>({
		condition,
		onSuccess(data) {
			if (isFirstQuery) {
				setData(data)
			} else {
				if (isInfinity) {
					setData(state => [...state, ...data])
				} else {
					setData(data)
				}
			}
		},
	})

	function saveNextPage(response: IPagination<T[]>) {
		if (response.next) {
			setOffset(+getValueParamFromQuery(response.next, 'offset'))
			setHasNextPage(true)
		} else {
			setHasNextPage(false)
		}
	}

	function savePreviousPage(response: IPagination<T[]>) {
		if (response.previous) {
			setOffset(+getValueParamFromQuery(response.previous, 'offset'))
			setHasPreviousPage(true)
		} else {
			setHasPreviousPage(false)
		}
	}

	async function fetchQuery(savePage: (response: IPagination<T[]>) => void) {
		const params = {
			limit,
			offset,
			...queryParam,
		}
		const response = await callback(params)

		savePage(response)

		setTotalCount(response.count)
		setFirstQuery(false)

		return response.results
	}

	async function fetchNextPage() {
		await handlerQuery(() => fetchQuery(saveNextPage))
	}

	async function fetchPreviousPage() {
		await handlerQuery(() => fetchQuery(savePreviousPage))
	}

	// const { ref, inView } = useInView({
	// 	...observerParams,
	// })

	// useEffect(() => {
	// 	if (inView) {
	// 		fetchQuery()
	// 	}
	// }, [inView])

	return {
		...otherQueryProps,
		data,
		fetchNextPage,
		fetchPreviousPage,
		fetchQuery,
		hasNextPage,
		hasPreviousPage,
		totalCount,
	}
}

export default usePaginationCustom
