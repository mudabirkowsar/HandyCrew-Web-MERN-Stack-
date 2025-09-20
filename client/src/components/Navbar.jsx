import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigate = useNavigate();

  // Decode user whenever token changes
  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
        setUserName(decoded.name);
      } catch (err) {
        console.error("Invalid token:", err);
        setUser(null);
        setUserName(null);
      }
    } else {
      setUser(null);
      setUserName(null);
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setShowLogoutModal(false);
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link to="/"><div className="navbar-logo">HandyCrew</div></Link>
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

          {token ? (
            <div
              className="user-dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="btn login">{userName}</button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/profile">
                    <button className="dropdown-item">View Profile</button>
                  </Link>
                  <Link to="/edit-profile">
                    <button className="dropdown-item">Edit Profile</button>
                  </Link>
                  <button
                    className="dropdown-item logout"
                    onClick={() => setShowLogoutModal(true)}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="btn login">Login</button>
            </Link>
          )}
        </div>
      </nav>

      {/* ✅ Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>⚠️ Are you sure you want to logout?</h3>
            <p>You will need to log in again to access your account.</p>
            <div className="modal-actions">
              <button className="btn cancel" onClick={() => setShowLogoutModal(false)}>
                Cancel
              </button>
              <button className="btn confirm" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
