import { useObserver } from './useObserver'
import { useState } from 'react'
import { IPagination } from 'shared/interfaces/pagination.interface'
import { useQuery } from 'react-query'

interface IUseInfinityQuery<T> {
	observer: React.MutableRefObject<null>
	queryKey: string
	queryFunc: (props: any) => Promise<IPagination<T[]>>
	queryParam?: {}
	initialLimit?: number
	initialOffset?: number
	observerParams?: IntersectionObserverInit
}

const useInfinityQuery = <T>({
	observer,
	queryParam,
	initialOffset = 0,
	initialLimit = 15,
	observerParams = {},
	queryKey,
	queryFunc,
}: IUseInfinityQuery<T>) => {
	const [offset, setOffset] = useState(initialOffset)
	const [limit, setLimit] = useState(initialLimit)

	const [totalPages, setTotalPages] = useState(0)

	const [data, setData] = useState<T[]>([])

	async function fetchPosts() {
		const params = {
			limit,
			offset,
			...queryParam,
		}

		return await queryFunc(params)
	}

	const { isLoading, ...otherProps } = useQuery(
		[queryKey, offset],
		fetchPosts,
		{
			keepPreviousData: true,
			onSuccess: data => {
				setTotalPages(state => (state = data.count))
				setData(state => [...state, ...data.results])
			},
		}
	)

	useObserver({
		element: observer,
		callback: () => {
			setOffset(state => state + limit)
		},
		isLoading,
		condition: offset + limit < totalPages,
		observerParams,
	})

	return { ...otherProps, data, isLoading }
}

export default useInfinityQuery
