import { Table } from "react-bootstrap"
import { useNavigate, useLocation, useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { deleteProjectAction } from "../../redux/thunk/projectThunk"
import { useDispatch } from "react-redux"


function DetailOfProject() {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()
    // console.log(params)
    const dispatch = useDispatch()

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
        const newProjectData = location.state.projectData
        console.log(newProjectData)
        setProjectData({
            ...newProjectData
        })

    }, [])

    console.log(projectData)
    const handleRetrieveProjectData = () => {
        navigate("/project")
    }

    const handleDeleteProjectDetail = async (projectId) => {
       await dispatch(deleteProjectAction(projectId))
        navigate('/project')
    }

    const handleEditProjectData = () => {

        navigate(`/project/edit/${params.projectId}`, {
            state: {
                projectData: projectData
            }
        })
    }

    return (
        <div>
            <h4>Detail Of Project</h4>
            <button type="button" onClick={() => handleRetrieveProjectData()} >Retrieve</button>
            <button type="button" onClick={() => handleEditProjectData()} >Edit</button>
            <button type="button" onClick={() => handleDeleteProjectDetail(params.projectId)}>Delete</button>

            <Table variant="dark" striped className="tableWrapper">
                <tbody>
                    <tr >
                        <th>ID:</th>
                        <td>{params.projectId}</td>
                    </tr>
                    <tr>
                        <th>Date:</th>
                        <td>{projectData.date}</td>
                    </tr>
                    <tr>
                        <th>Title:</th>
                        <td>{projectData.title}</td>
                    </tr>
                    <tr>
                        <th>Description:</th>
                        <td>{projectData.description}</td>
                    </tr>
                    <tr>
                        <th>UI Technology:</th>
                        <td>{projectData.technology && projectData.technology.uiTech}</td>
                    </tr>
                    <tr>
                        <th>Back End Technology:</th>
                        <td>{projectData.technology && projectData.technology.backEndTech}</td>
                    </tr>
                    <tr>
                        <th>Library Used:</th>
                        <td>{projectData.library.join(", ")}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default DetailOfProject