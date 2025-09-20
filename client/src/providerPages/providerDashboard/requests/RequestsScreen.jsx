import React from "react";
import { FaWrench, FaBolt, FaUserCircle } from "react-icons/fa";
import "./RequestsScreen.css";

function RequestsScreen() {
    const requests = [
        { id: 1, name: "John Doe", service: "Plumbing", date: "20th Sept", avatar: "", serviceType: "Plumbing" },
        { id: 2, name: "Jane Smith", service: "Electrician", date: "21st Sept", avatar: "", serviceType: "Electrician" },
    ];

    const getServiceIcon = (type) => {
        switch (type.toLowerCase()) {
            case "plumbing":
                return <FaWrench />;
            case "electrician":
                return <FaBolt />;
            default:
                return <FaUserCircle />;
        }
    };

    return (
        <section className="requests-card">
            <h2>Service Requests</h2>
            <div className="requests-list">
                {requests.map((req) => (
                    <div key={req.id} className="request-item">
                        <div className="request-avatar">
                            {req.avatar ? <img src={req.avatar} alt={req.name} /> : <FaUserCircle className="default-avatar" />}
                        </div>
                        <div className="request-info">
                            <div className="request-name">{req.name}</div>
                            <div className="request-service">
                                {getServiceIcon(req.serviceType)} {req.service} on {req.date}
                            </div>
                        </div>
                        <div className="request-buttons">
                            <button className="accept-btn">Accept</button>
                            <button className="reject-btn">Reject</button>
                        </div>
                    </div>
                ))}
                {requests.length === 0 && <p>No requests at the moment.</p>}
            </div>
        </section>
    );
}

export default RequestsScreen;
