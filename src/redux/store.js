import { configureStore } from '@reduxjs/toolkit'
import { cakeIceCreamSlice } from './slice/cakeIceCreamSlice'

export const store = configureStore({
    reducer: {
        cakeIceCream: cakeIceCreamSlice.reducer
    },
})