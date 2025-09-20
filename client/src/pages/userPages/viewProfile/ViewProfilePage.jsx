import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../../api/api"; // adjust import path
import "./ViewProfilePage.css";

function ViewProfilePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getCurrentUser();
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user profile:", err.message);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div className="loading">Loading profile...</div>;
  }

  const avatarUrl = user.image
    ? user.image
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(
        user.name
      )}&background=0077ff&color=fff&size=128`;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img src={avatarUrl} alt="Profile" className="profile-avatar" />
          <h2>{user.name}</h2>
          <p className="profile-role">{user.role}</p>
        </div>

        <div className="profile-info">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone || "Not provided"}
          </p>
          {user.location ? (
            <>
              <p>
                <strong>City:</strong> {user.location.city}
              </p>
              <p>
                <strong>State:</strong> {user.location.state}
              </p>
              <p>
                <strong>Zip Code:</strong> {user.location.zipcode}
              </p>
            </>
          ) : (
            <p>
              <strong>Location:</strong> Not provided
            </p>
          )}
        </div>

        {/* ✅ Update Now Button */}
        <div className="profile-actions">
          <button
            className="btn update-btn"
            onClick={() => navigate("/update-profile")}
          >
            Update Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewProfilePage;
