import React from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar-logo">HandyCrew</div>

            {/* Links */}
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            {/* Buttons */}
            <div className="navbar-buttons">
                <Link to="/login">
                    <button className="btn login">Login</button>
                </Link>
                <Link to="/provider">
                    <button className="btn provider">Become a Provider</button>
                </Link>
            </div>
        </nav>
    );
}
