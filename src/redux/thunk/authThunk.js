import { createAsyncThunk } from "@reduxjs/toolkit"

export const userLoginAction = createAsyncThunk(
    'auth/userLoginAction',
    async (arg, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8888/user/authJWT/login', {
                method: "POST",
                body: JSON.stringify(arg),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const responseData = await response.json()
            if (!response.ok) {
                throw new Error(responseData)
            }
            return responseData
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)