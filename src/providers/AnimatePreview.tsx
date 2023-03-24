import React, { useEffect, useState } from 'react'


interface AuthProviderProps {
	children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	
  const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		
	}, [])

	return (
    <>
    {isVisible &&  children}
    </>
  )
}