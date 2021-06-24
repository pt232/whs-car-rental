import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {
  faAddressCard,
  faSearchLocation,
  faChartLine,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/card/Card";
import DashboardCard from "../../components/card/dashboard/DashboardCard";
import DeliverInformationList from "../../components/list/deliver/DeliverInformationList";
import "./AccountPage.css";
import PartnerDashboardCard from "../../components/card/dashboard/PartnerDashboardCard";

const AccountPage = () => {
  const [userRole, setUserRole] = useState("");
  const token = localStorage.getItem("token");
  const customerItems = [
    {
      icon: faAddressCard,
      title: "Name",
      content: "John Doe",
    },
    {
      icon: faSearchLocation,
      title: "Adresse",
      content: "Borstelmannsweg 50, 92661 Altenstadt",
    },

    {
      icon: faChartLine,
      title: "Anzahl Reservierungen",
      content: "Insgesamt 3 erfolgreich abgeschlossene Reservierungen",
    },
  ];
  const partnerItems = [
    {
      icon: faAddressCard,
      title: "Name",
      content: "John Doe",
    },
    {
      icon: faSearchLocation,
      title: "Adresse",
      content: "Borstelmannsweg 50, 92661 Altenstadt",
    },

    {
      icon: faCalendarAlt,
      title: "Registriert seit",
      content:
        "Sie sind seit dem 30.05.2019 ein Partner unserer Autovermietung",
    },
  ];

  useEffect(() => {
    const userRole = localStorage.getItem("role");

    if (userRole === "customer") {
      setUserRole("customer");
    } else {
      setUserRole("partner");
    }
  }, []);

  return (
    <>
      {!token ? <Redirect to="/login" /> : null}
      <section className="account">
        <div className="container container--small">
          <h1 className="account__title">Herzlich Willkommen, John Doe!</h1>
          {userRole === "customer" ? (
            <div className="account__content">
              <aside className="account__information">
                <Card title="Nutzerinformationen">
                  <DeliverInformationList items={customerItems} padding={0} />
                </Card>
              </aside>
              <div className="account__dashboard">
                <DashboardCard />
              </div>
            </div>
          ) : (
            <div className="account__content">
              <aside className="account__information">
                <Card title="Partnerinformationen">
                  <DeliverInformationList items={partnerItems} padding={0} />
                </Card>
              </aside>
              <div className="account__dashboard">
                <PartnerDashboardCard />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AccountPage;
