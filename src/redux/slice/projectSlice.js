import { createSlice, current } from '@reduxjs/toolkit'
import { getProjectListAction, createProjectAction, updateProjectAction, deleteProjectAction } from '../thunk/projectThunk'

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


            .addCase(createProjectAction.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(createProjectAction.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(createProjectAction.rejected, (state, action) => {
                state.isLoading = false
            })


            .addCase(updateProjectAction.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(updateProjectAction.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(updateProjectAction.rejected, (state, action) => {
                state.isLoading = false
            })


            .addCase(deleteProjectAction.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(deleteProjectAction.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(deleteProjectAction.rejected, (state, action) => {
                state.isLoading = false
            })
    },
})


// Action creators are generated for each case reducer function
export const {
} = projectSlice.actions


