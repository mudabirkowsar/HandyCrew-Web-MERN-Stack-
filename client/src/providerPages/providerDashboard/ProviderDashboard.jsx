import React, { useEffect, useState } from "react";
import "./ProviderDashboard.css";
import { getDashboardData } from '../../api/api'
import Sidebar from "./dashboard/DashboardScreen";
import ProfileScreen from "./profile/ProfileScreen";
import SettingsScreen from "./settting/SettingsScreen";
import ServicesScreen from "./services/ServicesScreen";
import RequestsScreen from "./requests/RequestsScreen";
import DashboardScreen from "./dashboard/DashboardScreen"


function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  

  return (
    <div className="dashboard">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="content">
        {/* {activeTab === "dashboard" && <DashboardScreen />} */}
        {activeTab === "profile" && <ProfileScreen />}
        {activeTab === "services" && <ServicesScreen />}
        {activeTab === "requests" && <RequestsScreen />}
        {activeTab === "settings" && <SettingsScreen />}
      </main>
    </div>
  );
}

export default ProviderDashboard;
