import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit'

import { IUser } from '../../shared/interfaces/user.interface'
import { login, logout, register, verify, changeUser } from './auth.actions'

type IInitialState = {
	user: IUser | null
	error: string | null
	isError: boolean
	isLoading: boolean
	isAuth: boolean
}

const initialState: IInitialState = {
	user: null,
	error: null,
	isError: false,
	isLoading: false,
	isAuth: false,
}

const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},

	extraReducers: builder => {
		builder.addCase(changeUser.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.user = payload
			state.error = null
			state.isError = false
		})
		builder.addCase(register.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.user = payload.user
			state.error = null
			state.isError = false
			state.isAuth = true
		})
		builder.addCase(
			register.rejected,
			(state, { payload }: PayloadAction<any>) => {
				state.isLoading = false
				state.user = null
				state.error = payload
				state.isError = true
				state.isAuth = false
			}
		)
		builder.addCase(verify.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.user = payload.user
			state.isAuth = true
			state.isError = false
			state.error = null
		})
		builder.addCase(
			verify.rejected,
			(state, { payload }: PayloadAction<any>) => {
				state.error = payload
				state.isLoading = false
				state.isError = true
				state.user = null
				state.isAuth = false
			}
		)

		builder.addCase(login.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.user = payload.user
			state.error = null
			state.isError = false
			state.isAuth = true
		})
		builder.addCase(
			login.rejected,
			(state, { payload }: PayloadAction<any>) => {
				state.isLoading = false
				state.user = null
				state.error = payload
				state.isError = true
				state.isAuth = false
			}
		)
		builder.addCase(logout.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.user = null
			state.error = null
			state.isError = false
			state.isAuth = false
		})

		builder.addMatcher(isLoadingAction, state => {
			state.isLoading = true
		})
	},
})

function isLoadingAction(action: AnyAction) {
	return action.type.endsWith('pending')
}

export const {} = AuthSlice.actions

export default AuthSlice.reducer
