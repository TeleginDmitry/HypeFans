import {
  IUserResponse,
  IRegister,
  IResponse,
  ILogin
} from 'shared/interfaces/auth.interface'
import {
  removeTokensStorage,
  saveTokensStorage
} from '@services/auth/Auth.helper'
import { IChangeUser, IUser } from 'shared/interfaces/user.interface'
import { AuthService } from 'services/auth/Auth.service'
import { UserService } from 'services/user/User.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const login = createAsyncThunk<IResponse, ILogin>(
  'auth/login',
  async ({ password, email }, { rejectWithValue }) => {
    try {
      const response = await AuthService.login({
        password,
        email
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
  async ({ password, username, email }, { rejectWithValue }) => {
    try {
      const response = await AuthService.register({
        username,
        password,
        email
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
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const response = await UserService.changeUser({ data, id })
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
