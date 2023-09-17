import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoListAction,
  deleteTodoAction,
} from "../../redux/thunk/todoThunk";
import DeleteTodoConfirmationModal from "./components/DeleteTodoConfirmationModal";

function TodoList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const todoList = state.todo.todoList;

  const [todoDeleteModalData, setTodoDeleteModalData] = useState({
    isShowDeleteModal: false,
    todoIdForDelete: "",
  });

  useEffect(() => {
    dispatch(getTodoListAction());
  }, []);

  const handleDeleteTodoData = async (todoId) => {
    setTodoDeleteModalData({
      isShowDeleteModal: true,
      todoIdForDelete: todoId,
    });
  };

  const handleDeleteConfirmTodoData = async () => {
    await dispatch(deleteTodoAction(todoDeleteModalData.todoIdForDelete));
    dispatch(getTodoListAction());
    setTodoDeleteModalData({
      isShowDeleteModal: false,
      todoIdForDelete: "",
    });
  };

  const handleEditTodoData = (item) => {
    navigate(`/todo/edit/${item.id}`, {
      state: {
        todoData: { ...item },
      },
    });
  };

  const handleTodoDetailData = (item) => {
    navigate(`/todo/detail/${item.id}`, {
      state: {
        todoData: { ...item },
      },
    });
  };

  return (
    <div>
      {state.todo.isLoading && <div>loading...</div>}

      <div className="d-flex justify-content-end">
        <NavLink to="/todo/create">
          <button style={{ color: "blanchedalmond" }}>Create Todo</button>
        </NavLink>
      </div>

      <h4>Todo</h4>
      <Table variant="dark" striped>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Date</th>
            <th>Title</th>
            <th>Description</th>
            <th>UI Technology</th>
            <th>Back End Technology</th>
            <th>Library Used</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todoList &&
            todoList.map((item, index) => {
              {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.date}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.technology && item.technology.uiTech}</td>
                    <td>{item.technology && item.technology.backEndTech}</td>
                    <td>{item.library.join(", ")}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleDeleteTodoData(item.id)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        onClick={() => handleEditTodoData(item)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTodoDetailData(item)}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
        </tbody>
      </Table>
      <DeleteTodoConfirmationModal
        isShowModal={todoDeleteModalData?.isShowDeleteModal}
        todoId={todoDeleteModalData?.todoIdForDelete}
        handleOkModal={() => {
          handleDeleteConfirmTodoData();
        }}
        handleCancelModal={() => {
          setTodoDeleteModalData({
            ...todoDeleteModalData,
            isShowDeleteModal: false,
            todoIdForDelete: "",
          });
        }}
      />
    </div>
  );
}

export default TodoList;
