import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from '@services/auth/Auth.service'
import { UserService } from '@services/user/User.service'
import {
	IResponse,
	IRegister,
	IUserResponse,
	ILogin,
} from '../../shared/interfaces/auth.interface'
import {
	IChangeUser, IUser
} from '../../shared/interfaces/user.interface'
import {
	removeTokensStorage,
	saveTokensStorage,
} from '@services/auth/Auth.helper'

export const login = createAsyncThunk<IResponse, ILogin>(
	'auth/login',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const response = await AuthService.login({
				email,
				password,
			})

			if (response?.data) {
				saveTokensStorage(response.data)
			}

			return response.data as IResponse
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const register = createAsyncThunk<IResponse, IRegister>(
	'auth/register',
	async ({ email, username, password }, { rejectWithValue }) => {
		try {
			const response = await AuthService.register({
				email,
				password,
				username,
			})

			if (response?.data) {
				saveTokensStorage(response.data)
			}

			return response.data as IResponse
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const changeUser = createAsyncThunk<IUser, IChangeUser>(
	'auth/changeUser',
	async ({id, data}, { rejectWithValue }) => {

		try {
			const response = await UserService.changeUser({id, data})
			return response.data as IUser
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const verify = createAsyncThunk<IUserResponse>(
	'auth/verify',
	async (_, { rejectWithValue }) => {
		try {
			const response = await AuthService.verify()

			return response.data as IUserResponse
		
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

// export const getUser = createAsyncThunk<IUser, { id: number }>(
// 	'auth/getUser',
// 	async ({ id }, { rejectWithValue }) => {
// 		try {
// 			const response = await UserService.getUser(id)

// 			return response.data as IUser
// 		} catch (error) {
// 			return rejectWithValue(error)
// 		}
// 	}
// )

export const logout = createAsyncThunk<void, void>(
	'auth/logout',
	async function (_, { rejectWithValue }) {
		try {
			const response = await AuthService.logout()

			if (response?.data) {
				removeTokensStorage()
			}
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
