import React, { useState } from "react";
import {
  faThLarge,
  faCheckCircle,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../Card";
import DashboardNavbar from "../../nav/dashboard/DashboardNavbar";
import "./DashboardCard.css";
import ReservationList from "../../list/reservation/ReservationList";

const PartnerDashboardCard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const items = [
    { icon: faThLarge, name: "Dashboard" },
    { icon: faCheckCircle, name: "Reservierungen" },
    { icon: faFileSignature, name: "Rücknahmen" },
  ];

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <Card padding={0}>
      <DashboardNavbar
        items={items}
        handler={handleTabChange}
        activeTab={activeTab}
      />
      <div className="dashboard-content">
        {activeTab === 0 ? (
          <p className="dashboard-content__text">
            Durch dieses Dashboard bekommst du Einsicht in deine Account
            Details...
          </p>
        ) : null}
        {activeTab === 1 ? (
          <>
            <h4
              style={{ marginBottom: 0 }}
              className="dashboard-content__title"
            >
              Die Reservierungen Ihrer Kunden im Überblick
            </h4>
            <ReservationList back={false} />
          </>
        ) : null}
        {activeTab === 2 ? (
          <>
            <h4
              style={{ marginBottom: 0 }}
              className="dashboard-content__title"
            >
              Ihre Rücknahmeprotokolle im Überblick
            </h4>
            <ReservationList back={true} />
          </>
        ) : null}
      </div>
    </Card>
  );
};

export default PartnerDashboardCard;
