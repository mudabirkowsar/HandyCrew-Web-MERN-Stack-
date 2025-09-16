import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About HandyCrew</h1>
        <p>Your trusted partner for home and professional services</p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1668383778557-d71c562fdb4b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About HandyCrew"
          />
        </div>
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At <strong>HandyCrew</strong>, we connect you with skilled service
            providers who bring expertise right to your doorstep. From plumbing
            and electrical repairs to cleaning and home improvement, we ensure
            that every service is reliable, affordable, and professional.
          </p>
          <p>
            Our mission is to make everyday tasks easier for you by offering a
            trusted network of providers who care about quality and customer
            satisfaction.
          </p>
        </div>
      </section>

      {/* Mission / Highlights */}
      <section className="about-highlights">
        <h2>Our Values</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <h3>✔ Reliability</h3>
            <p>Services you can count on, every single time.</p>
          </div>
          <div className="highlight-card">
            <h3>✔ Professionalism</h3>
            <p>Experienced providers who value quality and trust.</p>
          </div>
          <div className="highlight-card">
            <h3>✔ Convenience</h3>
            <p>Easy booking and quick service at your fingertips.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
