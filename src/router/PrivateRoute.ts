import { ReactNode, useEffect, useState } from 'react'
import { LOGIN_PAGE } from 'configs/index.config'
import { useNavigate } from 'react-router-dom'

import { useTypedSelector } from '../hooks/useTypedSelector'

interface IPrivateRoute {
  isAuthRoute?: boolean
  children: ReactNode
}

const PrivateRoute = ({ isAuthRoute = false, children }: IPrivateRoute) => {
  const navigate = useNavigate()

  const { isLoading, isAuth } = useTypedSelector((state) => state.auth)

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
