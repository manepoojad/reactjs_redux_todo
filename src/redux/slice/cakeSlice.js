import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cakeCount: 0,
}

export const cakeSlice = createSlice({
    name: 'cakeSlice',
    initialState,
    reducers: {
        addCakeAction: (state, action) => {
            state.cakeCount = action.payload
            console.log("function called", action)
        },
        removeCakeAction: (state, action) => {
            state.cakeCount = action.payload
            console.log("function called", action)
        },

    },
})

// Action creators are generated for each case reducer function
export const {
    addCakeAction, removeCakeAction,

} = cakeSlice.actions

// export default cakeSlice.reducer

const test = (value1) => {
    console.log(value1)
}
test(10)