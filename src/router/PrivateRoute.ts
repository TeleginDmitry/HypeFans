import { LOGIN_PAGE } from 'configs/index.config'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IPrivateRoute {
	children: ReactNode
	isAuthRoute?: boolean
}

const PrivateRoute = ({ children, isAuthRoute = false }: IPrivateRoute) => {
	const navigate = useNavigate()

	const { isAuth, isLoading } = useTypedSelector(state => state.auth)

	const [isCompletedCheck, setCompletedCheck] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			
			if (isLoading) return

			if (!isAuth && !isAuthRoute)
				return navigate(`/${LOGIN_PAGE}`, { replace: true })

			if (isAuth && isAuthRoute) return navigate(-1)

			setCompletedCheck(true)
		})

		return () => {
			clearTimeout(timer)
		}
	}, [isLoading, isAuth])

	return isCompletedCheck && children
}

export default PrivateRoute
