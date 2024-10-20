import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cashierProfile.css";
import { Navbar } from "react-bootstrap";

function CashierProfile() {
  const today = new Date().toLocaleDateString();
  const [todos, setTodos] = useState([
    { id: 1, task: "Complete the inventory check", completed: false },
    { id: 2, task: "Update the cash register", completed: false },
    { id: 3, task: "Prepare the daily sales report", completed: false },
    { id: 4, task: "Prepare the daily sales report", completed: false },
    { id: 5, task: "Prepare the daily sales report", completed: false },
  ]);

  const toggleCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="profileContainer">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Abdullah</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link to="/register" className="navLink">
            Register
          </Link>
          <Link to="/signIn" className="navLink">
            Sign In
          </Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="profile">
        <div className="profilePicture">
          <img
            src="https://wallpapers.com/images/featured-full/cute-aesthetic-profile-pictures-pjfl391j3q0f7rlz.jpg"
            alt="Cashier"
          />
        </div>
        <div className="profileInfo">
          <h1>Welcome Back!</h1>
          <p>
            <strong>Name:</strong> Abdullah Nazir
          </p>
          <p>
            <strong>Email:</strong> abdullah03096344305@example.com
          </p>
          <p>
            <strong>Date:</strong> {today}
          </p>
        </div>
      </div>

      <div className="todoSection">
        <h2>To-Do List</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompletion(todo.id)}
              />
              {todo.task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CashierProfile;
