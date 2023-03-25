import { useTypedSelector } from 'hooks/useTypedSelector';
import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface IPrivateElement {
	children: ReactNode
}

const PrivateElement = ({ children }: IPrivateElement) => {
	const navigate = useNavigate()

	const { isAuth, isLoading } = useTypedSelector(state => state.auth)

	useEffect(() => {
		const checkAuthentication = async () => {
			if (!isAuth && isLoading === false) {
				navigate('/login', {replace: true})
			} else {
				return null
			}
		}

		checkAuthentication()
	}, [isAuth, isLoading])

	return children
}

export default PrivateElement
