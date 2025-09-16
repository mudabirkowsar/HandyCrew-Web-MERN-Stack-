import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailRegex)) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Signup Successful ✅");
      // You can add API call here
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>
        <p className="signup-subtitle">Join HandyCrew today</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          {/* Password */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
            </span>
          </div>
          {errors.password && <p className="error-text">{errors.password}</p>}

          {/* Confirm Password */}
          <div className="password-field">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <i
                className={`fas ${
                  showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                }`}
              ></i>
            </span>
          </div>
          {errors.confirmPassword && (
            <p className="error-text">{errors.confirmPassword}</p>
          )}

          {/* Submit */}
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <Link to="/login" className="login-link">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
