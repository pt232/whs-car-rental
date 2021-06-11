import React from "react";
import { Redirect } from "react-router-dom";
import {
  faAddressCard,
  faSearchLocation,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/card/Card";
import DashboardCard from "../../components/card/dashboard/DashboardCard";
import DeliverInformationList from "../../components/list/deliver/DeliverInformationList";
import "./AccountPage.css";

const AccountPage = () => {
  const token = localStorage.getItem("token");
  const items = [
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

  return (
    <>
      {!token ? <Redirect to="/login" /> : null}
      <section className="account">
        <div className="container container--small">
          <h1 className="account__title">Herzlich Willkommen, John Doe!</h1>
          <div className="account__content">
            <aside className="account__information">
              <Card title="Nutzerinformationen">
                <DeliverInformationList items={items} padding={0} />
              </Card>
            </aside>
            <div className="account__dashboard">
              <DashboardCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountPage;
