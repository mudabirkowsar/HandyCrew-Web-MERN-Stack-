import React from "react";
import "./HomePage.css";

export default function HomePage() {
    return (
        <div className="homepage">
            <section className="hero">
                {/* Left Content */}
                <div className="hero-content">
                    <h1>
                        Welcome to <span>HandyCrew</span>
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
