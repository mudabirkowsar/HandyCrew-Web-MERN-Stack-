import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [token, setToken] = useState();

  useEffect(()=> {
    const token = localStorage.getItem("token" || null)
    setToken(token);
  }, token)

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
        <Link to="/become-a-provider">
          <button className="btn provider">Become a Provider</button>
        </Link>

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
