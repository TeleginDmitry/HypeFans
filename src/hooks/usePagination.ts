import { useObserver } from './useObserver'
import { useState } from 'react'
import { IPagination } from 'shared/interfaces/pagination.interface'
import { useQuery } from 'react-query'

interface IUsePagination<T> {
	observer?: React.MutableRefObject<null> | undefined
	queryKey: string
	queryFunc: (props: any) => Promise<IPagination<T[]>>
	queryParam?: {}
	initialLimit?: number
	initialOffset?: number
	observerParams?: IntersectionObserverInit
	isInfinity?: boolean
}

const usePagination = <T>({
	queryParam,
	initialOffset = 0,
	initialLimit = 15,
	queryKey,
	queryFunc,
	isInfinity = false,
}: IUsePagination<T>) => {
	const [offset, setOffset] = useState(initialOffset)
	const [limit, setLimit] = useState(initialLimit)
	const [hasNextPage, setHasNextPage] = useState(false)

	const [totalPages, setTotalPages] = useState(0)

	const [data, setData] = useState<T[]>([])

	function handlerOffset() {
		if (offset + limit < totalPages) {
			setOffset(state => state + limit)
		}
	}

	async function fetchQuery() {
		const params = {
			limit,
			offset,
			...queryParam,
		}
		const response = await queryFunc(params)
		return response
	}

	const allPropsQuery = useQuery([queryKey, offset], fetchQuery, {
		keepPreviousData: true,
		onSuccess: data => {
			if (isInfinity) {
				setData(state => [...state, ...data.results])
			} else {
				setData(data.results)
			}

			setTotalPages(() => data.count)
			setHasNextPage(() => offset + limit < data.count)
		},
	})

	return {
		...allPropsQuery,
		data,
		handlerOffset,
		totalPages,
		hasNextPage,
		limit,
		offset,
	}
}

export default usePagination
