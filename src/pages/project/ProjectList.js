import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getProjectListAction, deleteProjectAction } from '../../redux/thunk/projectThunk'




function ProjectList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log(state)

  const projectList = state.project.projectList

  useEffect(() => {
    dispatch(getProjectListAction())

  }, [])

  const handleDeleteProjectData = async (projectId) => {
    await dispatch(deleteProjectAction(projectId))
    dispatch(getProjectListAction())

  }

  const handleEditProjectData = (item) => {
    navigate(`/project/edit/${item.id}`, {
      state: {
        projectData: { ...item }

      }
    })

  }

  const handleProjectDetailData = (item) => {
    // debugger

    navigate(`/project/detail/${item.id}`, {
      state: {
        projectData: { ...item }
      }
    })

  }

  return (
    <div>
      {
        state.project.isLoading && <div>loading...</div>
      }

      <div className='d-flex justify-content-end'>
        <NavLink to='/project/create'>
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

export default ProjectList