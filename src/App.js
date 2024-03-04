import React, { useState, useEffect } from "react";
import All from "./components/All";
// import { Element } from 'react-scroll';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import ManagerLogin from "./components/ManagerLogin";
import ManagerSignup from "./components/ManagerSignup";
import EmployeeLogin from "./components/EmployeeLogin";
import EmployeeSignup from "./components/EmployeeSignup";

import "./App.css";
import EmployeeDashboard from "./components/Employee/EmployeeDashboard";
import AdminDashboard from "./components/Manager/AdminDashboard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/login" element={<ManagerLogin />} />
          <Route path="/signup" element={<ManagerSignup />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/manager-dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
