import React from "react";
import { Link } from "react-router-dom";
import "../css/register.css";

function SignIn() {
  return (
    <div className="Container">
      <form className="form">
        <p className="title">Sign In</p>
        <p className="message">Welcome back! Please login to your account.</p>
        <label>
          <input required placeholder="" type="email" className="input" />
          <span>Email</span>
        </label>

        <label>
          <input required placeholder="" type="password" className="input" />
          <span>Password</span>
        </label>

        <button className="submit">Sign In</button>
        <p className="signup">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
