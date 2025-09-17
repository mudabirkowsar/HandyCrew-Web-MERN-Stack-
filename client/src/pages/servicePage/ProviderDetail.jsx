import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesProviderData from "../../../fullData/serviceProviders.json";
import "./ProviderDetail.css";

function ProviderDetail() {
  const { id } = useParams();
  const provider = servicesProviderData.find((p) => String(p.id) === id);

  if (!provider) {
    return (
      <div className="provider-detail-page">
        <h2>Provider Not Found</h2>
        <Link to="/services" className="back-link">
          ⬅ Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="provider-detail-page">
      {/* Back button */}
      <Link to="/services" className="back-link">
        ⬅ Back to Services
      </Link>

      {/* Provider Card */}
      <div className="provider-detail-card">
        <div className="provider-image-wrapper">
          <img
            src={provider.profileImage}
            alt={provider.name}
            className="provider-detail-image"
          />
        </div>

        <div className="provider-detail-info">
          <h1 className="provider-detail-name">
            {provider.name}{" "}
            {provider.isVerified && (
              <span className="verified-badge">✔ Verified</span>
            )}
          </h1>
          <p className="provider-detail-service">
            Service Type: {provider.serviceType}
          </p>
          <p className="provider-detail-experience">
            Experience: {provider.experience} years
          </p>
          <p className="provider-detail-rating">⭐ {provider.rating}</p>
          <p className="provider-detail-price">
            Charges: ${provider.pricePerHour}/hr
          </p>
          <p className="provider-detail-contact">
            📞 {provider.phone} | ✉️ {provider.email}
          </p>
          <p className="provider-detail-location">
            Location: {provider.location.city}, {provider.location.state} -{" "}
            {provider.location.zipcode}
          </p>
        </div>
      </div>

      {/* Availability */}
      <div className="provider-availability">
        <h2>Availability</h2>
        <ul>
          {Object.entries(provider.availability).map(([day, time], i) => (
            <li key={i}>
              <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{" "}
              {time}
            </li>
          ))}
        </ul>
      </div>

      {/* Services Offered */}
      <div className="provider-services">
        <h2>Services Offered</h2>
        <ul>
          {provider.servicesOffered.map((srv, i) => (
            <li key={i}>✔ {srv}</li>
          ))}
        </ul>
      </div>

      {/* Reviews */}
      <div className="provider-reviews">
        <h2>Customer Reviews</h2>
        {provider.reviews.length > 0 ? (
          provider.reviews.map((review, idx) => (
            <div key={idx} className="review-card">
              <p>
                <strong>{review.user}</strong> ⭐ {review.rating}
              </p>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>

      {/* Action Button */}
      <div className="book-now-wrapper">
        <button className="book-now-btn">Book This Provider</button>
      </div>
    </div>
  );
}

export default ProviderDetail;
