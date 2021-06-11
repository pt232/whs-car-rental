import React, { useState } from "react";
import Card from "../Card";
import DashboardNavbar from "../../nav/dashboard/DashboardNavbar";
import "./DashboardCard.css";
import ChangePassword from "../../form/password/ChangePassword";

const DashboardCard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <Card padding={0}>
      <DashboardNavbar handler={handleTabChange} activeTab={activeTab} />
      <div className="dashboard-content">
        {activeTab === 0 ? (
          <p className="dashboard-content__text">
            Durch dieses Dashboard bekommst du Einsicht in deine Account
            Details...
          </p>
        ) : null}
        {activeTab === 2 ? (
          <>
            <h4 className="dashboard-content__title">Passwort neu vergeben</h4>{" "}
            <ChangePassword />
          </>
        ) : null}
      </div>
    </Card>
  );
};

export default DashboardCard;
