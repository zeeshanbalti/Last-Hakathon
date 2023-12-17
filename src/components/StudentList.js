// StudentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { FaUserGraduate, FaClipboardList } from 'react-icons/fa'; // Import icons from react-icons library
import { useNavigate } from 'react-router-dom';

import './studentList.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students from the backend
    axios.get('http://localhost:3000/students').then((response) => {
      setStudents(response.data);
    });
  }, []);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Perform logout actions if needed (e.g., clear session, tokens, etc.)
    // For simplicity, we'll just redirect to the login page
    navigate('/');
  };

  return (
    <>
     <div className='Student-List-Page' >
        <div className='logo-twoButton'>
        <div className="logo">
         <h1>Logo</h1>
        </div>
        <div className="nav-buttons">
          <Link to="/students/Add" className="nav-button">
            <FaUserGraduate className="icon" />
            <span>Students</span>
          </Link>
          <Link to="/students" className="nav-button">
            <FaClipboardList className="icon" />
            <span>Attendance</span>
          </Link>
        </div>
        <div className='logOut-btn'>
        <button onClick={handleLogout} className="btn btn-primary">Log Out</button>
          </div> 
        </div>
        <div className="student-list-container">
      {/* Left Panel */}
      <div className="left-panel">
        <div className='Icon-Text'>
          <div className="student-icon">🎓</div>
          <div className="student-text">Students</div>
        </div>
        <div className="">
          <Link to="/students/add">
            <button className="add-student-button">Add Student</button>
          </Link>
        </div>
      </div>

      {/* Right Panel */}

      {/* Student List */}
      <div className="student-list">
        <h2>Student List</h2>
        <div className="student-table">
          <div className="table-header">
            <div>ID</div>
            <div>Profile Image</div>
            <div>Name</div>
            <div>Course</div>
            <div>Password</div>
            <div>Actions</div>
          </div>
          <ul>
            {students.map((student) => (
              <li key={student._id}>
                <div>{student._id}</div>
                <div>
                  <img
                    src={student.profilePic || 'default-profile.png'}
                    alt={student.name}
                    className="profile-image"
                  />
                </div>
                <div>{student.name}</div>
                <div>{student.course}</div>
                <div>{student.password}</div>
                <div className="action-icons">
                  <Link to={`/students/edit/${student._id}`}>
                    <span role="img" aria-label="edit">✏️</span>
                  </Link>
                  <span role="img" aria-label="view">👁️</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
        </div>
     </div>
    
    </>
  );
};

export default StudentList;
