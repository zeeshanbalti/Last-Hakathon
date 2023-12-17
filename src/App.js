// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Switch from 'react'
import Login from './components/Login';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/students"   element={<StudentList />} />
        <Route path="/students/add" element={<AddStudent />} />
      </Routes>
    </Router>
  );
};

export default App;
