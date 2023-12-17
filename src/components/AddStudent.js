// AddStudent.js
import React, { useState } from 'react';
import axios from 'axios';
import './addStudent.css'
// import { useNavigation } from 'react-router-dom';
const AddStudent = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState(null); // Added state for profile picture
   
  const handleAddStudent = () => {
     const formData = new FormData();
     formData.append('name', name);
    formData.append('course', course);
    formData.append('email', email);
    formData.append('profilePic', profilePic);

    // Send a POST request to add a new student
    axios.post('http://localhost:3000/students/add', formData)
      .then(response => {
        console.log(response.data);
        // Redirect to the student list page or perform any other action
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  };

  const handleProfilePicChange = (e) => {
    // Set the selected file to the state
    setProfilePic(e.target.files[0]);
  };

  return (
    <div className="add-student-container">
      <h2>Add Student</h2>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Course:</label>
        <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Profile Picture:</label>
        <input type="file" accept="image/*" onChange={handleProfilePicChange} />

        <button type="button" onClick={handleAddStudent}>Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
