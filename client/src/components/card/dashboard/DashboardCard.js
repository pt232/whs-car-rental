import React, { useState } from "react";
import {
  faThLarge,
  faCheckCircle,
  faUserCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../Card";
import DashboardNavbar from "../../nav/dashboard/DashboardNavbar";
import ChangePasswordForm from "../../form/password/ChangePasswordForm";
import ReservationList from "../../list/reservation/ReservationList";
import "./DashboardCard.css";

const DashboardCard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const items = [
    { icon: faThLarge, name: "Dashboard" },
    { icon: faCheckCircle, name: "Reservierungen" },
    { icon: faUserCircle, name: "Account" },
    { icon: faCog, name: "Einstellungen" },
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
              Ihre Reservierungen im Überblick
            </h4>
            <ReservationList />
          </>
        ) : null}
        {activeTab === 2 ? (
          <>
            <h4 className="dashboard-content__title">Passwort neu vergeben</h4>{" "}
            <ChangePasswordForm />
          </>
        ) : null}
      </div>
    </Card>
  );
};

export default DashboardCard;
