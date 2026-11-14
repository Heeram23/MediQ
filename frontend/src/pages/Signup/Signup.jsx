
import { useState } from "react";
import "./Signup.css";

function Signup() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "Patient"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Account created successfully!");
  };

  return (
    <div className="signup-container">

      <div className="signup-card">

        <h1 className="signup-logo">MediQ</h1>

        <h2>Create Account</h2>

        <p className="signup-subtitle">
          Join MediQ and manage your appointments easily
        </p>

        <form onSubmit={handleSignup}>

          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <label>Register As</label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
          </select>

          <button type="submit" className="signup-btn">
            Create Account
          </button>

        </form>

        <p className="login-text">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>

    </div>
  );
}

export default Signup;
