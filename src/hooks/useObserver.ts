import React, { useEffect, useRef } from 'react'

interface IUseObserver {
	element: React.MutableRefObject<null>
	isLoading: boolean
	callback: (props?: any) => void
	observerParams?: IntersectionObserverInit
	condition?: boolean
}

export const useObserver = ({
	callback,
	condition = true,
	element,
	isLoading,
	observerParams = {},
}: IUseObserver) => {
	const observer = useRef<IntersectionObserver>()

	useEffect(() => {
		if (isLoading) return
		if (observer.current) observer.current.disconnect()
		

		const cb: IntersectionObserverCallback = function (entries) {
			if (entries[0].isIntersecting && condition) {
				callback()
			}
		}
		observer.current = new IntersectionObserver(cb, observerParams)
		if (element?.current) {
			observer.current.observe(element.current)
		}
	}, [isLoading])
}
