import React, { useEffect, useRef } from 'react'

export const useObserver = (
	element: React.MutableRefObject<null>,
	condition: boolean,
	totalPages: number,
	optionsQuery: {
		offset: number,
		limit: number
	},
	isLoading: boolean,
	
	callback: (props?: any) => void,
	observerParam?: IntersectionObserverInit,
) => {
	const observer = useRef<IntersectionObserver>()

	useEffect(() => {
		if (isLoading) return
		if (observer.current) observer.current.disconnect()

		const cb: IntersectionObserverCallback = function (entries) {
			if (entries[0].isIntersecting && condition) {
				console.log(optionsQuery.offset + optionsQuery.limit  < totalPages, optionsQuery, totalPages)
				callback()
			}
		}
		observer.current = new IntersectionObserver(cb, observerParam)
		if (element.current) {
			observer.current.observe(element.current)
		}
	}, [isLoading])
}
