import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getTodoListAction = createAsyncThunk(
    'todo/getTodoListAction',
    async (arg, thunkAPI) => {
        try {
            /*
             response = await fetch('http://localhost:8888/todo', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const responseData = await response.json()
            if (!response.ok) {
                throw new Error(responseData)
            }
            */

            const response = await axios.get('http://localhost:8000/todo');
            const responseData = response.data

            return responseData
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)

export const createTodoAction = createAsyncThunk(
    'todo/createTodoAction',
    async (arg, thunkAPI) => {
        try {
            /*
            const response = await fetch('http://localhost:8888/todo', {
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
            */

            const response = await axios.post('http://localhost:8000/todo', arg)
            const responseData = response.data

            return responseData
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)


export const updateTodoAction = createAsyncThunk(
    'todo/updateTodoAction',
    async (arg, thunkAPI) => {
        try {
            /*
            const response = await fetch('http://localhost:8888/todo', {
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
            */

            const response = await axios.put('http://localhost:8000/todo', arg)
            const responseData = response.data

            return responseData
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)


export const deleteTodoAction = createAsyncThunk(
    'todo/deleteTodoAction',
    async (arg, thunkAPI) => {
        try {
            /*
            const response = await fetch(`http://localhost:8888/todo/${arg}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const responseData = await response.json()
            if (!response.ok) {
                throw new Error(responseData)
            }
            */

            const response = await axios.delete(`http://localhost:8000/todo/${arg}`);
            const responseData = response.data

            return responseData
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)


