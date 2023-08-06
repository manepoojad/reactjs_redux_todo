import { configureStore } from '@reduxjs/toolkit'
import { cakeIceCreamSlice } from './slice/cakeIceCreamSlice'
import { projectSlice } from './slice/projectSlice'
import { authSlice } from './slice/authSlice'
import { studentSlice } from './slice/studentSlice'

export const store = configureStore({
    reducer: {
        cakeIceCream: cakeIceCreamSlice.reducer,
        project:projectSlice.reducer,
        auth:authSlice.reducer,
        student:studentSlice.reducer,
    },
})