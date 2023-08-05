import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostLoginRoutes from './PostLoginRoutes';
import LogIn from '../pages/logIn/LogIn';

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
          element={<PostLoginRoutes />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RootRouting