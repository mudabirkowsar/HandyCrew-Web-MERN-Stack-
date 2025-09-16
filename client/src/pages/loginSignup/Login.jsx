import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to continue using HandyCrew</p>

        <form className="login-form">
          <input type="email" placeholder="Email Address" required />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i
                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              ></i>
            </span>
          </div>

          <div className="login-options">
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="signup-text">
          Don’t have an account?{" "}
          <Link to="/signup" className="signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
