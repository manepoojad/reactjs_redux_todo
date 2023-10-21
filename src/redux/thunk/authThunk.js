import { createAsyncThunk } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

export const userLoginAction = createAsyncThunk(
    'auth/userLoginAction',
    async (arg, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8888/api/user/auth', {
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
            Cookies.set('userAuth', JSON.stringify(responseData.token), { expires: 1 })
            localStorage.setItem("roles",JSON.stringify(responseData.roles))
            localStorage.setItem("employeeId",JSON.stringify(responseData.employeeId))
            localStorage.setItem("userEmail",JSON.stringify(responseData.userEmail))
            
            return responseData
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)