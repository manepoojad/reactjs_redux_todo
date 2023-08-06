import { createSlice, current } from '@reduxjs/toolkit'
import { userLoginAction } from '../thunk/authThunk'

const initialState = {
    isLoading: false,
    logedinUserInfo:{
        token:"",
        userRole:"",
    }
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLoginAction.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(userLoginAction.fulfilled, (state, action) => {
                state.isLoading = false
                state.logedinUserInfo=action.payload
            })
            .addCase(userLoginAction.rejected, (state, action) => {
                state.isLoading = false
            })

    },
})


// Action creators are generated for each case reducer function
export const {
} = authSlice.actions


