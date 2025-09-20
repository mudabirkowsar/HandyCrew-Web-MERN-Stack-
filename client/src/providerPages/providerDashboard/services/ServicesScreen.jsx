import React, { useEffect, useState } from "react";
import { getDashboardData } from "../../../api/api";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "./ServicesScreen.css";

function ServicesScreen() {
  const [provider, setProvider] = useState(null);
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getDashboardData();
      setProvider(res.data);
      setService(res.data.serviceType || null);
    };
    fetchUser();
  }, []);

  return (
    <section className="services-card">
      <div className="card-header">
        <h2>My Services</h2>
        <button className="add-btn"><FaPlus /> Add Service</button>
      </div>

      <div className="list">
        {service ? (
          <div className="service-item">
            <span>{service}</span>
            <div className="service-buttons">
              <button className="edit-btn"><FaEdit /> Edit</button>
              <button className="delete-btn"><FaTrash /> Delete</button>
            </div>
          </div>
        ) : (
          <div className="no-service">
            <p>No service added yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesScreen;
