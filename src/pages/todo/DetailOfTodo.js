import { Table } from "react-bootstrap"
import { useNavigate, useLocation, useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { deleteTodoAction } from "../../redux/thunk/todoThunk"
import { useDispatch } from "react-redux"


function DetailOfTodo() {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()
    // console.log(params)
    const dispatch = useDispatch()

    const [todoData, setTodoData] = useState({
        date: "",
        title: "",
        description: "",
        uiTech: "",
        backEndTech: "",
        library: []
    })

    useEffect(() => {

        console.log(location)
        const newTodoData = location?.state?.todoData
        console.log(newTodoData)
        setTodoData({
            ...newTodoData
        })

    }, [])

    console.log(todoData)
    const handleRetrieveTodoData = () => {
        navigate("/todo")
    }

    const handleDeleteTodoDetail = async (todoId) => {
       await dispatch(deleteTodoAction(todoId))
        navigate('/todo')
    }

    const handleEditTodoData = () => {

        navigate(`/todo/edit/${params.todoId}`, {
            state: {
                todoData: todoData
            }
        })
    }

    return (
        <div>
            <h4>Detail Of Todo</h4>
            <button type="button" onClick={() => handleRetrieveTodoData()} >Retrieve</button>
            <button type="button" onClick={() => handleEditTodoData()} >Edit</button>
            <button type="button" onClick={() => handleDeleteTodoDetail(params.todoId)}>Delete</button>

            <Table variant="dark" striped className="tableWrapper">
                <tbody>
                    <tr >
                        <th>ID:</th>
                        <td>{params.todoId}</td>
                    </tr>
                    <tr>
                        <th>Date:</th>
                        <td>{todoData.date}</td>
                    </tr>
                    <tr>
                        <th>Title:</th>
                        <td>{todoData.title}</td>
                    </tr>
                    <tr>
                        <th>Description:</th>
                        <td>{todoData.description}</td>
                    </tr>
                    <tr>
                        <th>UI Technology:</th>
                        <td>{todoData.technology && todoData.technology.uiTech}</td>
                    </tr>
                    <tr>
                        <th>Back End Technology:</th>
                        <td>{todoData.technology && todoData.technology.backEndTech}</td>
                    </tr>
                    <tr>
                        <th>Library Used:</th>
                        <td>{todoData.library.join(", ")}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default DetailOfTodo