import { useTypedSelector } from './../hooks/useTypedSelector'
import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface IPrivateAuth {
	children: ReactNode
}

const PrivateAuth = ({ children }: IPrivateAuth) => {
	const navigate = useNavigate()

	const { isAuth, isLoading } = useTypedSelector(state => state.auth)

	useEffect(() => {
		setTimeout(() => {
			if (isAuth && !isLoading) {
				navigate(-1)
			}
		})
	}, [isAuth, isLoading])

	return children
}

export default PrivateAuth
