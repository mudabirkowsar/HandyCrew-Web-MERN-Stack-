import React, { useEffect, useState } from "react";
import { getDashboardData } from "../../../api/api";
import "./ProfileScreen.css";

function ProfileScreen() {
    const [provider, setProvider] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getDashboardData();
            setProvider(res.data);
        };

        fetchUser();
    }, []);

    if (!provider) return null;

    return (
        <section className="profile-card">
            <div className="profile-header">
                <img
                    src={provider.avatar || provider.profileImage || "https://via.placeholder.com/120"}
                    alt={provider.name}
                    className="profile-image"
                />
                <h2>{provider.name}</h2>
            </div>
            <div className="profile-info">
                <div className="info-item">
                    <span className="label">Email:</span>
                    <span className="value">{provider.email}</span>
                </div>
                <div className="info-item">
                    <span className="label">Phone:</span>
                    <span className="value">{provider.phone}</span>
                </div>
                <div className="info-item">
                    <span className="label">Service Type:</span>
                    <span className="value">{provider.serviceType}</span>
                </div>
                <div className="info-item">
                    <span className="label">Experience:</span>
                    <span className="value">{provider.experience} years</span>
                </div>
                <div className="info-item">
                    <span className="label">Price per Hour:</span>
                    <span className="value">${provider.pricePerHour}</span>
                </div>
                <div className="info-item">
                    <span className="label">Location:</span>
                    <span className="value">
                        {`${provider.location?.city || ''}, ${provider.location?.state || ''} ${provider.location?.zipcode || ''}`}
                    </span>
                </div>
            </div>
        </section>
    );
}

export default ProfileScreen;
