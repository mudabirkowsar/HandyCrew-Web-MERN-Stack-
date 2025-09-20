import React from "react";
import services from "../../../fullData/services.json"; // import your JSON
import "./TopServices.css";
import { Link, useNavigate } from "react-router-dom";

function TopServices() {
  const navigate = useNavigate();
  return (
    <section className="top-services">
      <h2 className="top-services-title">Top Services We Provide</h2>
      <div className="services-grid">
        {services.map((service) => (
          <Link to={`/service/${service.id}`} key={service.id}>
            <div className="service-card" key={service.id}>
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.name} className="service-image" />
              </div>
              <div className="service-content">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-meta">
                  <span className="service-price">{service.priceRange}</span>
                  <span className="service-rating">⭐ {service.rating}</span>
                </div>
                <div className="service-time">Estimated: {service.estimatedTime}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default TopServices;
