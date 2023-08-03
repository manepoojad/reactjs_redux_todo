import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoutingPostLogin from './RoutingPostLogin';
import LogIn from '../pages/logIn/LogIn';
import Project from '../pages/project/Project'

function RootRouting() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/logIn"
        element={<LogIn />}
      />
      <Route
        path='/*'
        element={<RoutingPostLogin />}
      />
       <Route
        path='/*'
        element={<Project />}
      />
    </Routes>
  </BrowserRouter>
  )
}

export default RootRouting