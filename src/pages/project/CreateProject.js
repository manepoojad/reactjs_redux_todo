import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProjectAction } from "../../redux/thunk/projectThunk";

function CreateProject() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [projectData, setProjectData] = useState({
    date: "",
    title: "",
    description: "",
    backEndTech: "",
    uiTech: "",
    library: [],
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    const value = e.target.value;

    if (type == "checkbox") {
      const checked = e.target.checked;
      let newValue = [...projectData.library];
      if (checked) {
        newValue.push(value);
      } else {
        newValue = newValue.filter((item) => item !== value);
      }
      setProjectData({
        ...projectData,
        library: newValue,
      });
    } else {
      setProjectData({
        ...projectData,
        [name]: e.target.value,
      });
    }
  };

  const addProject = async () => {
    try {
      console.log(projectData);

      const requestBodyPayload = {
        title: projectData.title,
        date: projectData.date,
        description: projectData.description,
        technology: {
          uiTech: projectData.uiTech,
          backEndTech: projectData.backEndTech,
        },
        library: projectData.library,
      };

      await dispatch(createProjectAction(requestBodyPayload)).unwrap();

      setProjectData({
        date: "",
        title: "",
        description: "",
        uiTech: "",
        backEndTech: "",
        library: [],
      });
      navigate("/project");
    } catch (error) {}
  };
  return (
    <div>
      <form>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={projectData.date}
            placeholder="yyyy-mm-dd"
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <br />
        </div>
        <div>
          <label>Project Title:</label>
          <input
            type="text"
            name="title"
            value={projectData.title}
            placeholder="Enter Project Title"
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <br />
        </div>
        <div>
          <label>Project Description:</label>
          <textarea
            name="description"
            value={projectData.description}
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
            value={projectData.uiTech}
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
            checked={projectData.backEndTech === "python"}
            onChange={(e) => handleInputChange(e)}
          />
          <label>.NET</label>
          <input
            type="radio"
            name="backEndTech"
            value="net"
            checked={projectData.backEndTech === "net"}
            onChange={(e) => handleInputChange(e)}
          />
          <label>PHP</label>
          <input
            type="radio"
            name="backEndTech"
            value="php"
            checked={projectData.backEndTech === "php"}
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
            checked={
              projectData.library && projectData.library.includes("redux")
            }
            onChange={(e) => handleInputChange(e)}
          />
          <label>Saga</label>
          <input
            type="checkbox"
            name="library"
            value="saga"
            checked={
              projectData.library && projectData.library.includes("saga")
            }
            onChange={(e) => handleInputChange(e)}
          />
          <label>Numpy</label>
          <input
            type="checkbox"
            name="library"
            value="numpy"
            checked={
              projectData.library && projectData.library.includes("numpy")
            }
            onChange={(e) => handleInputChange(e)}
          />
          <label>Pandas</label>
          <input
            type="checkbox"
            name="library"
            value="pandas"
            checked={
              projectData.library && projectData.library.includes("pandas")
            }
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <br />
        </div>
        <div>
          <button type="button" onClick={() => addProject()}>
            AddProject
          </button>
          <button type="button">Reset</button>
          <button
            type="button"
            onClick={() => {
              navigate("/project");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProject;
