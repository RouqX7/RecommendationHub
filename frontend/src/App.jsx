import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoutes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Genres from "./pages/Genres";
import Trending from "./pages/Trending";
import Search from "./pages/Search";

function Logout() {
  localStorage.clear();
  return <Navigate to="login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/genres" element={
          <ProtectedRoute>
            <Genres/>
          </ProtectedRoute>
        } />
        <Route
         path="/trending"
         element={
          <ProtectedRoute>
            <Trending/>
          </ProtectedRoute>
        } />
        <Route 
        path="/search" 
        component={
          <ProtectedRoute>
            <Search/>
          </ProtectedRoute>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
