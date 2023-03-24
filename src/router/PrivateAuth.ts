import { ReactNode, useEffect } from 'react'
import { useAppSelector } from '../hooks/ReduxHooks'
import { useNavigate } from 'react-router-dom'


interface IPrivateAuth {
	children: ReactNode
}

const PrivateAuth = ({ children }: IPrivateAuth) => {
	const navigate = useNavigate()

	const { isAuth, isLoading } = useAppSelector(state => state.auth)

	useEffect(() => {
		const checkAuthentication = async () => {
			if (isAuth && isLoading === false) {
				navigate('/', { replace: true })
			}
		}

		checkAuthentication()
	}, [isAuth, isLoading])

	return children
}

export default PrivateAuth
