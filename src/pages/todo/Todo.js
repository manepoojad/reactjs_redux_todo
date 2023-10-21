import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";
import DetailOfTodo from "./DetailOfTodo";
import TodoList from "./TodoList";

function Todo() {
  const location = useLocation();

  return (
    <Routes>
      <Route
        path={`/`}
        element={<Navigate replace="/" to={`${location?.pathname}/list`} />}
      />
      <Route path={"list"} element={<TodoList />} />
      <Route path={"create"} element={<CreateTodo />} />
      <Route path={"edit/:todoId"} element={<EditTodo />} />
      <Route path={"detail/:todoId"} element={<DetailOfTodo />} />
    </Routes>
  );
}

export default Todo;
