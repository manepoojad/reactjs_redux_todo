import { configureStore } from '@reduxjs/toolkit'
import { cakeIceCreamSlice } from './slice/cakeIceCreamSlice'
import { todoSlice } from './slice/todoSlice'
import { authSlice } from './slice/authSlice'
import { studentSlice } from './slice/studentSlice'

export const store = configureStore({
    reducer: {
        cakeIceCream: cakeIceCreamSlice.reducer,
        todo:todoSlice.reducer,
        auth:authSlice.reducer,
        student:studentSlice.reducer,
    },
})