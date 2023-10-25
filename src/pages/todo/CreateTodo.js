import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createTodoAction } from "../../redux/thunk/todoThunk";
import { createTodoSchema } from "./todoSchema";
import FormFieldSchemaRender from "../../components/schemaRender/FormFieldSchemaRender";

function CreateTodo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [todoData, setTodoData] = useState({
    date: "",
    title: "",
    description: "",
    backEndTech: "python",
    uiTech: "",
    library: [],
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    const value = e.target.value;

    if (type == "checkbox") {
      const checked = e.target.checked;
      let newValue = [...todoData.library];
      if (checked) {
        newValue.push(value);
      } else {
        newValue = newValue.filter((item) => item !== value);
      }
      setTodoData({
        ...todoData,
        library: newValue,
      });
    } else {
      setTodoData({
        ...todoData,
        [name]: e.target.value,
      });
    }
  };

  const addTodo = async () => {
    try {
      console.log(todoData);

      const requestBodyPayload = {
        title: todoData.title,
        date: todoData.date,
        description: todoData.description,
        technology: {
          uiTech: todoData.uiTech,
          backEndTech: todoData.backEndTech,
        },
        library: todoData.library,
      };

      await dispatch(createTodoAction(requestBodyPayload)).unwrap();

      setTodoData({
        date: "",
        title: "",
        description: "",
        uiTech: "",
        backEndTech: "",
        library: [],
      });
      navigate("/todo");
    } catch (error) {}
  };
  return (
    <div>
      <form>
        <div>
          {createTodoSchema.map((item, index) => (
            <FormFieldSchemaRender
              key={`${item.type}_${item.name}`}
              formFieldItem={item}
              formValueObject={todoData}
              onChange={(e) => handleInputChange(e)}
            />
          ))}
        </div>
        <div>
          --------------------------------------------------------------------------
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={todoData.date}
            placeholder="yyyy-mm-dd"
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <br />
        </div>
        <div>
          <label>Todo Title:</label>
          <input
            type="text"
            name="title"
            value={todoData.title}
            placeholder="Enter Todo Title"
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <br />
        </div>
        <div>
          <label>Todo Description:</label>
          <textarea
            name="description"
            value={todoData.description}
            placeholder="Enter description"
            onChange={(e) => handleInputChange(e)}
          ></textarea>
          <br />
          <br />
        </div>
        <div>
          <label>UI Technology:</label>
          <select
            name="uiTech"
            value={todoData.uiTech}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="select">Select</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="flutter">Flutter</option>
            <option value="vue.Js">Vue.js</option>
          </select>
          <br />
          <br />
        </div>
        <div>
          <label>Back-End Technology:</label>
          <label>Python</label>
          <input
            type="radio"
            name="backEndTech"
            value="python"
            checked={todoData.backEndTech === "python"}
            onChange={(e) => handleInputChange(e)}
          />
          <label>.NET</label>
          <input
            type="radio"
            name="backEndTech"
            value="net"
            checked={todoData.backEndTech === "net"}
            onChange={(e) => handleInputChange(e)}
          />
          <label>PHP</label>
          <input
            type="radio"
            name="backEndTech"
            value="php"
            checked={todoData.backEndTech === "php"}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <br />
        </div>
        <div>
          <label>Library Used:</label>
          <label>Redux</label>
          <input
            type="checkbox"
            name="library"
            value="redux"
            checked={todoData.library && todoData.library.includes("redux")}
            onChange={(e) => handleInputChange(e)}
          />
          <label>Saga</label>
          <input
            type="checkbox"
            name="library"
            value="saga"
            checked={todoData.library && todoData.library.includes("saga")}
            onChange={(e) => handleInputChange(e)}
          />
          <label>Numpy</label>
          <input
            type="checkbox"
            name="library"
            value="numpy"
            checked={todoData.library && todoData.library.includes("numpy")}
            onChange={(e) => handleInputChange(e)}
          />
          <label>Pandas</label>
          <input
            type="checkbox"
            name="library"
            value="pandas"
            checked={todoData.library && todoData.library.includes("pandas")}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <br />
        </div>
        <div>
          <button type="button" onClick={() => addTodo()}>
            AddTodo
          </button>
          <button type="button">Reset</button>
          <button
            type="button"
            onClick={() => {
              navigate("/todo");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTodo;
