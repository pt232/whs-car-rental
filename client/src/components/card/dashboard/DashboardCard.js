import React from "react";
import Card from "../Card";
import DashboardNavbar from "../../nav/dashboard/DashboardNavbar";
import "./DashboardCard.css";

const DashboardCard = () => {
  return (
    <Card padding={0}>
      <DashboardNavbar />
      <div className="dashboard-content">
        <p className="dashboard-content__text">
          Durch dieses Dashboard bekommst du Einsicht in deine Account
          Details...
        </p>
      </div>
    </Card>
  );
};

export default DashboardCard;
