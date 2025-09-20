import React from "react";
import "./RequestsScreen.css";

function RequestsScreen() {
    const requests = [
        { id: 1, name: "John Doe", service: "Plumbing", date: "20th Sept" },
        { id: 2, name: "Jane Smith", service: "Electrician", date: "21st Sept" },
    ];

    return (
        <section className="requests-card">
            <h2>Service Requests</h2>
            <div className="requests-list">
                {requests.map((req) => (
                    <div key={req.id} className="request-item">
                        <div className="request-info">
                            <strong>{req.name}</strong> requested {req.service} on {req.date}
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
