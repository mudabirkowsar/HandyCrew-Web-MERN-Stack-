import React, { useState } from "react";
import "./ServicePage.css";
import servicesData from "../../../fullData/services.json"; 

function ServicePage() {
  const [search, setSearch] = useState("");

  // Filter services by name, type, or category
  const filteredServices = servicesData.filter(
    (service) =>
      service.name.toLowerCase().includes(search.toLowerCase()) ||
      service.type.toLowerCase().includes(search.toLowerCase()) ||
      service.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="services-page">
      {/* Search Bar */}
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Find the right professional service tailored to your needs</p>
        <input
          type="text"
          placeholder="Search for a service (e.g., Plumber, Cleaning)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.name}
                  className="service-image"
                />
              </div>
              <div className="service-content">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-category">{service.category}</p>
                <p className="service-description">{service.description}</p>
                <div className="service-meta">
                  <span className="service-price">{service.priceRange}</span>
                  <span className="service-rating">⭐ {service.rating}</span>
                </div>
                <p className="service-time">{service.estimatedTime}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No services found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default ServicePage;
