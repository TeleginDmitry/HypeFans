import { useState, useEffect, useCallback } from 'react'
import { IPagination } from 'shared/interfaces/pagination.interface'
import { useInView, IntersectionOptions } from 'react-intersection-observer'
import getValueParamFromQuery from 'utils/getValueParamFromQuery/getValueParamFromQuery'
import useFetching from './useFetching'

interface ICursorPagination<T> {
	queryParam?: {}
	initialState?: T[]
	isInfinity?: boolean
	observerParams?: IntersectionOptions
	condition?: boolean
}

type ICallback<T> = (params: any) => Promise<IPagination<T[]>>

const useCursorPagination = <T>(
	callback: ICallback<T>,
	{
		queryParam,
		initialState = [],
		isInfinity = false,
		observerParams,
		condition = true,
	}: ICursorPagination<T> = {}
) => {
	const [hasNextPage, setHasNextPage] = useState<boolean>()
	const [hasPreviousPage, setHasPreviousPage] = useState<boolean>()
	const [cursorNext, setCursorNext] = useState('')
	const [cursorPrevious, setCursorPrevious] = useState('')
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
			setHasNextPage(true)
			setCursorNext(getValueParamFromQuery(response.next, 'cursor'))
		} else setHasNextPage(false)
	}

	function savePreviousPage(response: IPagination<T[]>) {
		if (response.previous) {
			setHasPreviousPage(true)
			setCursorPrevious(getValueParamFromQuery(response.previous, 'cursor'))
		} else setHasPreviousPage(false)
	}

	function savePage(response: IPagination<T[]>) {
		saveNextPage(response)
		savePreviousPage(response)

		setFirstQuery(false)
	}

	async function fetchQuery(cursor: string) {
		const params = {
			...queryParam,
		}
		if (cursor) {
			params['cursor'] = cursor
		}
		const response = await callback(params)
		console.log(response)

		savePage(response)

		return response.results
	}

	async function fetchNextPage() {
		await handlerQuery(() => fetchQuery(cursorNext))
	}

	async function fetchPreviousPage() {
		await handlerQuery(() => fetchQuery(cursorPrevious))
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
	}
}

export default useCursorPagination
