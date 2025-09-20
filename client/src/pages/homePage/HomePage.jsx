import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../../api/api"; // adjust import path
import "./HomePage.css";

export default function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getCurrentUser(); // call your backend /me route
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching current user:", err.message);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="homepage">
      <section className="hero">
        {/* Left Content */}
        <div className="hero-content">
          <h1>
            Welcome {user ? <span>{user.name}</span> : "to HandyCrew"}
          </h1>
          <p>
            Your trusted service provider platform. Find skilled professionals for
            home services, repairs, and more — all in one place.
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Get Started</button>
            <button className="btn secondary">Learn More</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="HandyCrew Services"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
