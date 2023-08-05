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

export const createProjectAction = createAsyncThunk(
    'project/createProjectAction',
    async (arg, thunkAPI) => {
        try {
            debugger
            const response = await fetch('http://localhost:8888/project', {
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


export const updateProjectAction = createAsyncThunk(
    'project/updateProjectAction',
    async (arg, thunkAPI) => {
        try {
            debugger
            const response = await fetch('http://localhost:8888/project', {
                method: "PUT",
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


export const deleteProjectAction = createAsyncThunk(
    'project/deleteProjectAction',
    async (arg, thunkAPI) => {
        try {
            debugger
            const response = await fetch(`http://localhost:8888/project/${arg}`, {
                method: "DELETE",
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


