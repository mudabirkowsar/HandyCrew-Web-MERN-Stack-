import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [token, setToken] = useState();
  const [user, setUser] = useState(null);

  // console.log(user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">HandyCrew</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-buttons">

        {user?.role === "provider" ? (
          <Link to="/provider-dashboard">
            <button className="btn provider">Go to Dashboard</button>
          </Link>
        ) : (
          <Link to="/become-a-provider">
            <button className="btn provider">Become a Provider</button>
          </Link>
        )}



        {
          token ?
            <Link to="/"
              onClick={handleLogout}
            >
              <button className="btn login">Logout</button>
            </Link> :
            <Link to="/login">
              <button className="btn login">Login</button>
            </Link>
        }


      </div>
    </nav>
  );
}
