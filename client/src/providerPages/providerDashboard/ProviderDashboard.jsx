import React, { useState } from "react";
import "./ProviderDashboard.css";

function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Provider</h2>
        <ul>
          <li
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            My Profile
          </li>
          <li
            className={activeTab === "services" ? "active" : ""}
            onClick={() => setActiveTab("services")}
          >
            My Services
          </li>
          <li
            className={activeTab === "requests" ? "active" : ""}
            onClick={() => setActiveTab("requests")}
          >
            Requests
          </li>
          <li
            className={activeTab === "settings" ? "active" : ""}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        {activeTab === "profile" && (
          <section>
            <h2>My Profile</h2>
            <form className="form">
              <label>
                Name
                <input type="text" placeholder="Enter name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="Enter email" />
              </label>
              <label>
                Phone
                <input type="text" placeholder="Enter phone" />
              </label>
              <button type="submit">Update Profile</button>
            </form>
          </section>
        )}

        {activeTab === "services" && (
          <section>
            <h2>My Services</h2>
            <form className="form">
              <label>
                Service Name
                <input type="text" placeholder="Enter service" />
              </label>
              <label>
                Price per Hour
                <input type="number" placeholder="Enter price" />
              </label>
              <button type="submit">Add Service</button>
            </form>

            <div className="list">
              <h3>Existing Services</h3>
              <ul>
                <li>
                  Plumbing - $20/hr <button>Edit</button> <button>Delete</button>
                </li>
                <li>
                  Electrician - $25/hr <button>Edit</button>{" "}
                  <button>Delete</button>
                </li>
              </ul>
            </div>
          </section>
        )}

        {activeTab === "requests" && (
          <section>
            <h2>Service Requests</h2>
            <div className="list">
              <ul>
                <li>
                  <strong>John Doe</strong> requested Plumbing on 20th Sept
                  <button>Accept</button> <button>Reject</button>
                </li>
                <li>
                  <strong>Jane Smith</strong> requested Electrician on 21st Sept
                  <button>Accept</button> <button>Reject</button>
                </li>
              </ul>
            </div>
          </section>
        )}

        {activeTab === "settings" && (
          <section>
            <h2>Settings</h2>
            <form className="form">
              <label>
                Change Password
                <input type="password" placeholder="New password" />
              </label>
              <button type="submit">Update</button>
            </form>
          </section>
        )}
      </main>
    </div>
  );
}

export default ProviderDashboard;
