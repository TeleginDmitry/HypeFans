import { PayloadAction, createSlice, AnyAction } from '@reduxjs/toolkit'

import { changeUser, register, verify, logout, login } from './auth.actions'
import { IUser } from '../../shared/interfaces/user.interface'

type IInitialState = {
  error: string | null
  isLoading: boolean
  user: IUser | null
  isError: boolean
  isAuth: boolean
}

const initialState: IInitialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  error: null,
  user: null
}

const AuthSlice = createSlice({
  extraReducers: (builder) => {
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

    builder.addMatcher(isLoadingAction, (state) => {
      state.isLoading = true
    })
  },
  reducers: {},
  initialState,

  name: 'auth'
})

function isLoadingAction(action: AnyAction) {
  return action.type.endsWith('pending')
}

// eslint-disable-next-line no-empty-pattern
export const {} = AuthSlice.actions

export default AuthSlice.reducer
