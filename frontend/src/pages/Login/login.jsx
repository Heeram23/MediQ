
import { Link } from "react-router-dom";
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="logo">MediQ</h1>

        <h2>Welcome Back!</h2>

        <p className="subtitle">
          Login to manage your appointments
        </p>

        <form>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
