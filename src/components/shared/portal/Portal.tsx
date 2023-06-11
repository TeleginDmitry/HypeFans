// import { useEffect, useState } from 'react'
// import { createPortal } from 'react-dom'

// interface IPortal {
// 	id: string
// 	children: React.ReactNode
// }

// const PORTAL_ERROR_MSG = 'Данный элемент с id, не существует на странице.'

// const Portal = ({ children, id }: IPortal) => {
// 	const [container, setContainer] = useState<HTMLElement>()

// 	useEffect(() => {
// 		if (id) {
// 			const portalContainer = document.getElementById(id)

// 			if (!portalContainer) {
// 				throw new Error(PORTAL_ERROR_MSG)
// 			}

// 			setContainer(portalContainer)
// 		}
// 	}, [id])

// 	return container ? createPortal(children, container) : null
// }

// export default Portal

import { createPortal } from 'react-dom'

const PORTAL_ERROR_MSG = 'Данного элемента на странице, не существует.'

interface IPortal {
	element: Element
	children: React.ReactNode
}

const Portal = ({ children, element }: IPortal) => {
	if (!element) throw Error(PORTAL_ERROR_MSG)
	return createPortal(children, element)
}

export default Portal
