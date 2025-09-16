import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <h2 className="contact-title">Get in Touch with Us</h2>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>We are here to help you! Reach out to us anytime.</p>
          <ul>
            <li><strong>Address:</strong> 123 Handy St, City, Country</li>
            <li><strong>Phone:</strong> +1 234 567 890</li>
            <li><strong>Email:</strong> support@handycrew.com</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="6" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="contact-map">
        <h3>Our Location</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24147.99787322144!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316c09f9ad%3A0x2c05e60e45d2f9d9!2sNew%20York%20City%2C%20NY!5e0!3m2!1sen!2sus!4v1694775577330!5m2!1sen!2sus"
            width="100%"
            height="400px"
            style={{ border: "0", borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>

    </div>
  );
}

export default ContactPage;
