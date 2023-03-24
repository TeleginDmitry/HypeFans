import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/ReduxHooks'
import { verify } from '@store/auth/auth.actions'
import $api from '../api/api.interceptor'
import { AuthService } from '../services/auth/Auth.service'

interface AuthProviderProps {
	children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(verify())
	}, [])

	return <>{children}</>
}
