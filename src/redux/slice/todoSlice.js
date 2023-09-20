import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getTodoListAction,
  createTodoAction,
  updateTodoAction,
  deleteTodoAction,
} from "../thunk/todoThunk";

const initialState = {
  isLoading: false,
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodoListAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTodoListAction.fulfilled, (state, action) => {
        toast.success("todo fetch successfully!");
        state.isLoading = false;
        state.todoList = action.payload;
      })
      .addCase(getTodoListAction.rejected, (state, action) => {
        toast.error("something went wrong!");
        state.isLoading = false;
      })

      .addCase(createTodoAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createTodoAction.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createTodoAction.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(updateTodoAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateTodoAction.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateTodoAction.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(deleteTodoAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteTodoAction.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteTodoAction.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = todoSlice.actions;
