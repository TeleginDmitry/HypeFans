import React, { useEffect } from 'react'
import { useAppDispatch } from '@hooks/ReduxHooks'
import { verifyThunk } from '@store/AuthSlice/AuthSlice'

interface AuthProviderProps {
	children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const dispatch = useAppDispatch()


	useEffect(() => {
		dispatch(verifyThunk())
	}, [])

	return <>{children}</>
}
