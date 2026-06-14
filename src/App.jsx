import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLaout from "./layouts/MainLayout";
import Login from "./pages/Login";
import AdminLayout from "./layouts/AsminLayout";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={5000} />
      <Routes>
        <Route path="/" element={<MainLaout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          {/* <Route path="dashboard" element={<AdminDashbo />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
