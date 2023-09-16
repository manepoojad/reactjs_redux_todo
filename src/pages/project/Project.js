import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import CreateProject from "./CreateProject";
import EditProject from "./EditProject";
import DetailOfProject from "./DetailOfProject";
import ProjectList from "./ProjectList";

function Project() {
  const location = useLocation();

  return (
    <Routes>
      <Route
        path={`/`}
        element={<Navigate replace="/" to={`${location.pathname}/list`} />}
      />
      <Route path={"list"} element={<ProjectList />} />
      <Route path={"create"} element={<CreateProject />} />
      <Route path={"edit/:projectId"} element={<EditProject />} />
      <Route path={"detail/:projectId"} element={<DetailOfProject />} />
    </Routes>
  );
}

export default Project;
