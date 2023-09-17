import React, { useEffect, useState } from "react"
import { useLocation, useParams, useNavigate } from "react-router-dom"
import { updateTodoAction } from "../../redux/thunk/todoThunk"
import { useDispatch } from "react-redux"

function EditTodo() {
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
        const todoDataFromLocation = location.state.todoData
        console.log(todoDataFromLocation)
        const newTodoData = {
            date: todoDataFromLocation.date,
            title: todoDataFromLocation.title,
            description: todoDataFromLocation.description,
            uiTech: todoDataFromLocation.technology && todoDataFromLocation.technology.uiTech,
            backEndTech: todoDataFromLocation.technology && todoDataFromLocation.technology.backEndTech,
            library: todoDataFromLocation.library
        }
        // console.log(newTodoData)
        setTodoData({
            ...newTodoData
        })
    }, [])
    // console.log(todoData)

    const handleInputChange = (e) => {
        const name = e.target.name
        const type = e.target.type
        const value = e.target.value

        if (type == "checkbox") {
            const checked = e.target.checked
            let newValue = [...todoData.library]
            if (checked) {
                newValue.push(value)

            }
            else {
                newValue = newValue.filter(item => item !== value)

            }
            setTodoData({
                ...todoData,
                library: newValue
            })
        }
        else {
            setTodoData({
                ...todoData,
                [name]: e.target.value,
            })
        }
    }
    // console.log(todoData)

    const updateTodoData = async () => {
        try {
            const todoDataFromLocation = location.state.todoData
            const requestPayload =
            {
                id: todoDataFromLocation.id,
                title: todoData.title,
                date: todoData.date,
                description: todoData.description,
                technology: {
                    uiTech: todoData.uiTech,
                    backEndTech: todoData.backEndTech,
                },
                library: todoData.library
            }

            dispatch(updateTodoAction(requestPayload))

            setTodoData({
                date: "",
                title: "",
                description: "",
                uiTech: "",
                backEndTech: "",
                library: []
            })
            navigate("/todo")

        } catch (error) {
            console.log(error)
        }

    }

    const handleCancelTodoForm = () => {
        setTodoData({
            date: "",
            title: "",
            description: "",
            uiTech: "",
            backEndTech: "",
            library: []
        })
        navigate("/todo")
    }

    return (
        <div className="formWrapper">
            <form>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={todoData.date}
                        placeholder="yyyy-mm-dd"
                        onChange={e => handleInputChange(e)}
                    /><br /><br />
                </div>
                <div>
                    <label>Todo Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={todoData.title}
                        placeholder="Enter Todo Title"
                        onChange={e => handleInputChange(e)}
                    /><br /><br />
                </div>
                <div>
                    <label>Todo Description:</label>
                    <textarea
                        name="description"
                        value={todoData.description}
                        placeholder="Enter description"
                        onChange={e => handleInputChange(e)}
                    >
                    </textarea><br /><br />
                </div>
                <div>
                    <label>UI Technology:</label>
                    <select
                        name="uiTech"
                        value={todoData.uiTech}
                        onChange={e => handleInputChange(e)}>
                        <option value="select">Select</option>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="flutter">Flutter</option>
                        <option value="vue.Js">Vue.js</option>
                    </select><br /><br />
                </div>
                <div>
                    <label>Back-End Technology:</label>
                    <label>Python</label>
                    <input
                        type="radio"
                        name="backEndTech"
                        value="python"
                        checked={todoData.backEndTech === "python"}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>.NET</label>
                    <input
                        type="radio"
                        name="backEndTech"
                        value="net"
                        checked={todoData.backEndTech === "net"}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>PHP</label>
                    <input
                        type="radio"
                        name="backEndTech"
                        value="php"
                        checked={todoData.backEndTech === "php"}
                        onChange={e => handleInputChange(e)}
                    /><br /><br />
                </div>
                <div>
                    <label>Library Used:</label>
                    <label>Redux</label>
                    <input
                        type="checkbox"
                        name="library"
                        value="redux"
                        checked={todoData.library && todoData.library.includes("redux")}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>Saga</label>
                    <input
                        type="checkbox"
                        name="library"
                        value="saga"
                        checked={todoData.library && todoData.library.includes("saga")}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>Numpy</label>
                    <input
                        type="checkbox"
                        name="library"
                        value="numpy"
                        checked={todoData.library && todoData.library.includes("numpy")}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>Pandas</label>
                    <input
                        type="checkbox"
                        name="library"
                        value="pandas"
                        checked={todoData.library && todoData.library.includes("pandas")}
                        onChange={e => handleInputChange(e)}
                    /><br /><br />
                </div>
                <div>
                    <button type='button' onClick={() => updateTodoData()}>UpdateTodo</button>
                    <button type='button' onClick={() => handleCancelTodoForm()}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditTodo