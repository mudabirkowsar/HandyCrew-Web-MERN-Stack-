import React from "react";

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="sidebar">
      <h2 className="logo">Provider</h2>
      <ul>
        <li
          className={activeTab === "dashboard" ? "active" : ""}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </li>
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
        {/* <li
          className={activeTab === "update" ? "active" : ""}
          onClick={() => setActiveTab("update")}
        >
          Update
        </li> */}
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
  );
}

export default Sidebar;
