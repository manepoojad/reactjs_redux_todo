import { configureStore } from '@reduxjs/toolkit'
import { cakeIceCreamSlice } from './slice/cakeIceCreamSlice'
import { projectSlice } from './slice/projectSlice'

export const store = configureStore({
    reducer: {
        cakeIceCream: cakeIceCreamSlice.reducer,
        project:projectSlice.reducer
    },
})