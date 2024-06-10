import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import CustomerDashBoard from './components/customerDashBoard';
import AdminDashBoard from './components/adminDashBoard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/dashboard" element={<AdminDashBoard />} />
          <Route path="/client/dashboard" element={<CustomerDashBoard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
