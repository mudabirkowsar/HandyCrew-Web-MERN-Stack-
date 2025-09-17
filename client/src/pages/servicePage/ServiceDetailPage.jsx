import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../../../fullData/services.json";
import servicesProviderData from "../../../fullData/serviceProviders.json";
import "./ServiceDetailPage.css";

function ServiceDetailPage() {
  const { id } = useParams();
  const service = servicesData.find((s) => String(s.id) === id);

  if (!service) {
    return (
      <div className="service-detail-page">
        <h2>Service Not Found</h2>
        <Link to="/services" className="back-link">⬅ Back to Services</Link>
      </div>
    );
  }

  // filter providers by service type
  const providers = servicesProviderData.filter(
    (provider) =>
      provider.serviceType &&
      service.type &&
      provider.serviceType.toLowerCase() === service.type.toLowerCase()
  );

  return (
    <div className="service-detail-page">
      {/* Back button */}
      <Link to="/services" className="back-link">⬅ Back to Services</Link>

      {/* Service detail card */}
      <div className="detail-card">
        <div className="detail-image-wrapper">
          <img
            src={service.image}
            alt={service.name}
            className="detail-image"
          />
        </div>

        <div className="detail-content">
          <h1 className="detail-title">{service.name}</h1>
          <p className="detail-category">Category: {service.category}</p>
          <p className="detail-type">Type: {service.type}</p>
          <p className="detail-description">{service.description}</p>

          <div className="detail-meta">
            <span className="detail-price">{service.priceRange}</span>
            <span className="detail-rating">⭐ {service.rating}</span>
          </div>
          <p className="detail-time">Estimated Time: {service.estimatedTime}</p>
        </div>
      </div>

      {/* Providers Section */}
      <div className="providers-section">
        <h2>Available {service.type} Providers</h2>
        {providers.length > 0 ? (
          <div className="providers-grid">
            {providers.map((provider) => (
              <div className="provider-card" key={provider.id}>
                <img
                  src={provider.profileImage}
                  alt={provider.name}
                  className="provider-image"
                />
                <h3 className="provider-name">
                  {provider.name}{" "}
                  {provider.isVerified && (
                    <span className="verified-badge">✔</span>
                  )}
                </h3>
                <p className="provider-rating">⭐ {provider.rating}</p>
                <p className="provider-location">
                  {provider.location.city}, {provider.location.state}
                </p>
                <p className="provider-price">
                  ${provider.pricePerHour}/hr
                </p>
                <Link to={`/provider/${provider.id}`}>
                  <button className="provider-book-btn">Book Now</button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-providers">No providers available for this service.</p>
        )}
      </div>
    </div>
  );
}

export default ServiceDetailPage;
