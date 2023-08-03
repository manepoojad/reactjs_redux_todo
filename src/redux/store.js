import { configureStore } from '@reduxjs/toolkit'
import { cakeSlice } from './slice/cakeSlice'

export const store = configureStore({
  reducer: {
    cake:cakeSlice.reducer
  },
})