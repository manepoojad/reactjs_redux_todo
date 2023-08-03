import React, { useEffect, useState } from "react"
import { useLocation, useParams, useNavigate } from "react-router-dom"

function EditProject() {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()
    // console.log(params)

    const [projectData, setProjectData] = useState({
        date: "",
        title: "",
        description: "",
        uiTech: "",
        backEndTech: "",
        library: []
    })

    useEffect(() => {
        console.log(location)
        const projectDataFromLocation = location.state.projectData
        console.log(projectDataFromLocation)
        const newProjectData = {
            date: projectDataFromLocation.date,
            title: projectDataFromLocation.title,
            description: projectDataFromLocation.description,
            uiTech: projectDataFromLocation.technology && projectDataFromLocation.technology.uiTech,
            backEndTech: projectDataFromLocation.technology && projectDataFromLocation.technology.backEndTech,
            library: projectDataFromLocation.library
        }
        // console.log(newProjectData)
        setProjectData({
            ...newProjectData
        })
    }, [])
    // console.log(projectData)

    const handleInputChange = (e) => {
        const name = e.target.name
        const type = e.target.type
        const value = e.target.value

        if (type == "checkbox") {
            const checked = e.target.checked
            let newValue = [...projectData.library]
            if (checked) {
                newValue.push(value)

            }
            else {
                newValue = newValue.filter(item => item !== value)

            }
            setProjectData({
                ...projectData,
                library: newValue
            })
        }
        else {
            setProjectData({
                ...projectData,
                [name]: e.target.value,
            })
        }
    }
    // console.log(projectData)

    const updateProjectData = async () => {
        try {
            const projectDataFromLocation=location.state.projectData
            const requestPayload =
            {
                id: projectDataFromLocation.id,
                title: projectData.title,
                date: projectData.date,
                description: projectData.description,
                technology:{
                    uiTech: projectData.uiTech,
                    backEndTech: projectData.backEndTech,
                },
                library: projectData.library
            }
            // console.log(requestPayload)
            const response = await fetch('http://localhost:8888/project', {
                method: "PUT",
                body: JSON.stringify(requestPayload),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const responseData = await response.json()
            setProjectData({
                date: "",
                title: "",
                description: "",
                uiTech: "",
                backEndTech: "",
                library: []
            })
            navigate("/project")

        } catch (error) {
            console.log(error)
        }

    }

    const handleCancelProjectForm = () => {
        setProjectData({
            date: "",
            title: "",
            description: "",
            uiTech: "",
            backEndTech: "",
            library: []
        })
    }

    return (
        <div className="formWrapper">
            <form>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={projectData.date}
                        placeholder="yyyy-mm-dd"
                        onChange={e => handleInputChange(e)}
                    /><br /><br />
                </div>
                <div>
                    <label>Project Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={projectData.title}
                        placeholder="Enter Project Title"
                        onChange={e => handleInputChange(e)}
                    /><br /><br />
                </div>
                <div>
                    <label>Project Description:</label>
                    <textarea
                        name="description"
                        value={projectData.description}
                        placeholder="Enter description"
                        onChange={e => handleInputChange(e)}
                    >
                    </textarea><br /><br />
                </div>
                <div>
                    <label>UI Technology:</label>
                    <select
                        name="uiTech"
                        value={projectData.uiTech}
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
                        checked={projectData.backEndTech === "python"}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>.NET</label>
                    <input
                        type="radio"
                        name="backEndTech"
                        value="net"
                        checked={projectData.backEndTech === "net"}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>PHP</label>
                    <input
                        type="radio"
                        name="backEndTech"
                        value="php"
                        checked={projectData.backEndTech === "php"}
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
                        checked={projectData.library && projectData.library.includes("redux")}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>Saga</label>
                    <input
                        type="checkbox"
                        name="library"
                        value="saga"
                        checked={projectData.library && projectData.library.includes("saga")}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>Numpy</label>
                    <input
                        type="checkbox"
                        name="library"
                        value="numpy"
                        checked={projectData.library && projectData.library.includes("numpy")}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>Pandas</label>
                    <input
                        type="checkbox"
                        name="library"
                        value="pandas"
                        checked={projectData.library && projectData.library.includes("pandas")}
                        onChange={e => handleInputChange(e)}
                    /><br /><br />
                </div>
                <div>
                    <button type='button' onClick={() => updateProjectData()}>UpdateProject</button>
                    <button type='button' onClick={() => handleCancelProjectForm()}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditProject