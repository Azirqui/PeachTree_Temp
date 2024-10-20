import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/register.css'
import axios from "axios";
// require('dotenv').config();

function Register() {
  // Step 1: Set up state for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Step 2: Handle input change and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically set key based on input name
    }));
  };
  // const port = process.env.PORT;
  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    axios.post("http://localhost:3001/register", formData)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    

    
  };


  return (
    <div className="Container">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>
        <div className="flex">
          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              name="firstName" // Set name attribute to track input
              value={formData.firstName} // Bind state to input
              onChange={handleInputChange} // Handle input change
            />
            <span>firstName</span>
          </label>

          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <span>LastName</span>
          </label>
        </div>

        <label>
          <input
            required
            placeholder=""
            type="email"
            className="input"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required
            placeholder=""
            type="password"
            className="input"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span>Password</span>
        </label>

        <label>
          <input
            required
            placeholder=""
            type="password"
            className="input"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          <span>Confirm password</span>
        </label>

        <button type="submit" className="submit">
          Submit
        </button>

        <p className="signin">
          Already have an account? <Link to="/signIn">SignIn</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
