import React, { useState } from "react";
import "./ContactPage.css";
import { contact } from "../../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  // State for form inputs
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Remove error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    // If no errors, submit form
    if (Object.keys(newErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Login to continue");
          navigate("/login");
          return;
        }
        await contact(formData);
        toast.success("Message sent successfully");
        setFormData({ name: "", email: "", subject: "", message: "" });
        navigate("/");
      } catch (error) {
        toast.error("Failed to send message");
      }
    }
  };

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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="error">{errors.subject}</p>}

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map */}
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
