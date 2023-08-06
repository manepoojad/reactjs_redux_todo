import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { getStudentListAction } from '../../redux/thunk/studentThunk'


function Student() {
    const dispatch = useDispatch()
    const state=useSelector(state=>state)

    const studentList=state.student.studentList

    useEffect(() => {
        dispatch(getStudentListAction())
    }, [])




    return (
        <div>
            <Table variant='dark' striped>
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>dateOfBirth</th>
                        <th>Gender</th>
                        <th>KnownLanguages</th>
                        <th>Address</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList && studentList.map((item, index) => {
                            {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.dateOfBirth}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.knownLanguages}</td>
                                        <td>{item.address}</td>
                                        <td>{item.course}</td>
                                        <td>
                                            {/* <button type="button" onClick={() => handleDeleteStudentData(item.id)} >Delete</button> */}
                                            {/* <button type="button" onClick={() => handleEditStudentData(item)}>Edit</button> */}
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

export default Student