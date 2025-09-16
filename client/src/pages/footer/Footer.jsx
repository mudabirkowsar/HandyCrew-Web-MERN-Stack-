import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section">
          <h2 className="footer-logo">HandyCrew</h2>
          <p className="footer-about">
            Your trusted platform to find verified service providers near you.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="/services#plumbing">Plumbing</a></li>
            <li><a href="/services#electrician">Electrician</a></li>
            <li><a href="/services#cleaning">Home Cleaning</a></li>
            <li><a href="/services#painting">Painting</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@handycrew.com</p>
          <p>Phone: +1 234 567 890</p>
          <div className="footer-socials">
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" alt="Facebook"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png" alt="Twitter"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram"/></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HandyCrew. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
