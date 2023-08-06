import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const getStudentListAction = createAsyncThunk(
    'student/getStudentListAction',
    async (arg, thunkAPI) => {
        try {
            // const response = await fetch('http://localhost:8888/student', {
            //     method: "GET",
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // })
            // const responseData = await response.json()
            // if (!response.ok) {
            //     throw new Error(responseData)
            // }

            const response = await axios.get('http://localhost:8888/student');
            const responseData = response.data

            return responseData
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)