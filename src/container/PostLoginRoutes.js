import React from 'react'
import { Routes, Route, } from 'react-router-dom';
import About from '../pages/about/About'
import ContactUs from '../pages/contactUs/ContactUs'
import Home from '../pages/home/Home';
import Sidebar from '../component/navigation/Sidebar';
import Project from '../pages/project/Project'
import DetailOfProject from '../pages/project/DetailOfProject';
import EditProject from '../pages/project/EditProject';
import CreateProject from '../pages/project/CreateProject';
import Counting from '../pages/counting/Counting';
import Student from '../pages/student/Student';

function RoutingPostLogin() {
  return (
    <div className='routesWrapper'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/CreateProject" element={<CreateProject />} />
        <Route path="/editProject/:projectId" element={<EditProject />} />
        <Route path="/detailOfProject/:projectId" element={<DetailOfProject />} />
        <Route path="/counting" element={<Counting/>} />
        <Route path="/student" element={<Student/>} />
      </Routes>
    </div>

  )
}

export default RoutingPostLogin