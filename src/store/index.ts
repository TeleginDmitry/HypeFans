import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './AuthSlice/AuthSlice'


const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
})

export default store