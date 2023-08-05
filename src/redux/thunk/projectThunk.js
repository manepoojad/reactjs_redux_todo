import { createAsyncThunk } from "@reduxjs/toolkit"

export const getProjectListAction = createAsyncThunk(
    'project/getProjectListAction',
    async (arg, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8888/project', {
                method: "GET",
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