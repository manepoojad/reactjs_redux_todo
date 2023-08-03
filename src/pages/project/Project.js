import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { NavLink } from "react-router-dom"


function Project() {
  const navigate = useNavigate()
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    getProjectList()

  }, [])

  const getProjectList = async () => {

    const response = await fetch('http://localhost:8888/project', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const responseData = await response.json()
    console.log(responseData)
    setProjectList(responseData)

  }

  const handleDeleteProjectData = async (projectId) => {
    console.log('delete function called')
    const response = await fetch(`http://localhost:8888/project/${projectId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const responseData = await response.json()
    getProjectList()

  }

  const handleEditProjectData = (item) => {
    navigate(`/editProject/${item.id}`, {
      state: {
        projectData: { ...item }

      }
    })

  }

  const handleProjectDetailData = (item) => {
    // debugger

    navigate(`/detailOfProject/${item.id}`, {
      state: {
        projectData: { ...item }
      }
    })

  }

  return (
    <div>
      <div className='d-flex justify-content-end'>
        <NavLink to='/CreateProject'>
          <button style={{ color: 'blanchedalmond' }}>Create Project</button>
        </NavLink>
      </div>

      <h4>Project</h4>
      <Table variant='dark' striped>
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
          {
            projectList && projectList.map((item, index) => {
              console.log(item)
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
                      <button type="button" onClick={() => handleDeleteProjectData(item.id)} >Delete</button>
                      <button type="button" onClick={() => handleEditProjectData(item)}>Edit</button>
                      <button type='button' onClick={() => handleProjectDetailData(item)}>Details</button>
                    </td>

                  </tr>
                )
              }
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Project