import { createSlice, current } from '@reduxjs/toolkit'
import { getProjectListAction } from '../thunk/projectThunk'

const initialState = {
    isLoading: false,
    projectList: [],
}

export const projectSlice = createSlice({
    name: 'projectSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder

            .addCase(getProjectListAction.pending, (state, action) => {
                state.isLoading = true
            })

            .addCase(getProjectListAction.fulfilled, (state, action) => {
                state.isLoading = false
                state.projectList = action.payload
            })

            .addCase(getProjectListAction.rejected, (state, action) => {
                state.isLoading = false
            })
    },
})


// Action creators are generated for each case reducer function
export const {
} = projectSlice.actions


