import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    cakeCount: 0,
    iceCreamCount: 0
}

export const cakeIceCreamSlice = createSlice({
    name: 'cakeIceCreamSlice',
    initialState,
    reducers: {
        addCakeAction: (state, action) => {
            const incrementBy = action.payload
            const currentState = current(state)
            const cakeCount = currentState.cakeCount
            const newCakeCount = cakeCount + incrementBy
            state.cakeCount = newCakeCount
        },
        removeCakeAction: (state, action) => {
            state.cakeCount = action.payload
            // console.log("function called", action)
        },
        addIceCreamAction: (state, action) => {
            const incrementBy = action.payload
            const currentState = current(state)
            const iceCreamCount = currentState.iceCreamCount
            const newIceCreamCount = iceCreamCount + incrementBy
            state.iceCreamCount = newIceCreamCount
        },
        removeIceCreamAction: (state, action) => {
            state.iceCreamCount = action.payload
            // console.log("function called", action)
        },

    },
})

// Action creators are generated for each case reducer function
export const {
    addCakeAction, removeCakeAction,
    addIceCreamAction, removeIceCreamAction

} = cakeIceCreamSlice.actions

// export default cakeIceCreamSlice.reducer

