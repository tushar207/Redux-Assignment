import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../Feature/UserSlice'

export const store = configureStore({
  reducer: {
    user:UserSlice
  },
})