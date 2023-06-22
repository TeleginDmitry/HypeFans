import React, { useLayoutEffect } from 'react'
import useActions from 'hooks/useActions'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { verify } = useActions()

  useLayoutEffect(() => {
    verify()
  }, [])

  return <>{children}</>
}
