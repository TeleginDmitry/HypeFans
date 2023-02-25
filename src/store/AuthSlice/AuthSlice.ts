import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { AuthService } from '../../services/Auth.service'
import { UserService } from '../../services/User.service'
import { AuthResponse, AuthSignup, AuthVerify, AuthLogin } from '../../shared/interfaces/auth.interface'
import { IUser } from '../../shared/interfaces/user.interface'

export const loginThunk = createAsyncThunk<AuthResponse, AuthLogin, {}>(
	'auth/loginThunk',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const response = await AuthService.login({
				email,
				password,
			})

			return response
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const signupThunk = createAsyncThunk<AuthResponse, AuthSignup, {}>(
	'auth/signupThunk',
	async ({ email, username, password }, { rejectWithValue }) => {
		try {
			const response = await AuthService.signup({
				email,
				password,
				username,
			})

			return response
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const verifyThunk = createAsyncThunk<AuthVerify, void, {}>(
	'auth/verifyThunk',
	async (_, { rejectWithValue }) => {
		try {
			const access = localStorage.getItem('access')

			if (!access) throw new Error('Отсутствует access токен')
				
			const response = await AuthService.verify(access)
			return response
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const getUserThunk = createAsyncThunk<IUser, {id: number}, {}>(
	'auth/getUserThunk',
	async ({id}, { rejectWithValue }) => {
		try {

			const response = await UserService.getUser(id)
			if (response?.data) return response
			

		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const logoutThunk = createAsyncThunk(
	'auth/logoutThunk',
	async function (_, { rejectWithValue }) {
		try {
			const refresh = localStorage.getItem('refresh')

			if (!refresh) throw new Error('Отсутствует refresh токен')

			const response = await AuthService.logout(refresh)

			if (response?.data?.status) {
				localStorage.removeItem('refresh')
				localStorage.removeItem('access')
			}
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

function isPendingAction(action: any) {
	return action.type.endsWith('pending')
}

const initialState = {
	user: {},
	error: null,
	pending: false,
	isAuth: false,
}

const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},

	extraReducers: builder => {
		// builder.addCase(register.fulfilled, (state, { payload }) => {
		// 	state.pending = false
		// 	state.error = {}
		// })
		// builder.addCase(register.rejected, (state, { payload }) => {
		// 	state.error = payload?.detail
		// 	state.pending = false
		// 	state.isAuth = false
		// 	state.user = {}
		// })

		// builder.addCase(login.fulfilled, (state, { payload }) => {
		// 	state.pending = false
		// 	state.error = {}
		// 	state.error = {}
		// })
		// builder.addCase(login.rejected, (state, { payload }) => {
		// 	state.error = payload.detail
		// 	state.pending = false
		// 	state.isAuth = false
		// 	state.user = {}
		// })
		// builder.addCase(logout.fulfilled, (state, { payload }) => {
		// 	state.pending = false
		// 	state.isAuth = false
		// 	state.user = {}
		// 	state.error = {}
		// })
		// builder.addCase(logout.rejected, (state, { payload }) => {
		// 	state.error = payload?.detail
		// 	state.pending = false
		// 	state.isAuth = false
		// })
		// builder.addCase(getUser.fulfilled, (state, { payload }) => {
		// 	state.user = payload.data
		// 	state.isAuth = true
		// 	state.pending = false
		// 	state.error = {}
		// })
		// builder.addCase(getUser.rejected, (state, { payload }) => {
		// 	state.error = payload?.detail
		// 	state.pending = false
		// 	state.isAuth = false
		// })

		builder.addMatcher(isPendingAction, state => {
			state.pending = true
		})
	},
})

export const {  } = AuthSlice.actions

export default AuthSlice.reducer
