import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/about/About";
import ContactUs from "../pages/contactUs/ContactUs";
import Home from "../pages/home/Home";
import WithSidebar from "../component/navigation/WithSidebar";
import Counting from "../pages/counting/Counting";
import Student from "../pages/student/Student";
import Todo from "../pages/todo/Todo";

function RoutingPostLogin() {
  return (
    <WithSidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/todo/*" element={<Todo />} />
        <Route path="/counting" element={<Counting />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </WithSidebar>
  );
}

export default RoutingPostLogin;
