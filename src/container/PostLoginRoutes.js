import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/about/About";
import ContactUs from "../pages/contactUs/ContactUs";
import Home from "../pages/home/Home";
import Sidebar from "../component/navigation/Sidebar";
import Counting from "../pages/counting/Counting";
import Student from "../pages/student/Student";
import Project from "../pages/project/Project";

function RoutingPostLogin() {
  return (
    <div className="routesWrapper">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/project/*" element={<Project />} />
        <Route path="/counting" element={<Counting />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </div>
  );
}

export default RoutingPostLogin;
