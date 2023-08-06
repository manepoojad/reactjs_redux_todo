import { createSlice, current } from '@reduxjs/toolkit'
import { getStudentListAction } from '../thunk/studentThunk'


const initialState = {
    isLoading: false,
    studentList:[],
}

export const studentSlice = createSlice({
    name: 'studentSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getStudentListAction.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getStudentListAction.fulfilled, (state, action) => {
                state.isLoading = false
                state.studentList=action.payload
            })
            .addCase(getStudentListAction.rejected, (state, action) => {
                state.isLoading = false
            })
    },
})


// Action creators are generated for each case reducer function
export const {
} = studentSlice.actions


