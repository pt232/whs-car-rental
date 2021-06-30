import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import {
  faAddressCard,
  faSearchLocation,
  faChartLine,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../context/user/UserState";
import Card from "../../components/card/Card";
import DashboardCard from "../../components/card/dashboard/DashboardCard";
import DeliverInformationList from "../../components/list/deliver/DeliverInformationList";
import "./AccountPage.css";
import PartnerDashboardCard from "../../components/card/dashboard/PartnerDashboardCard";
import { get } from "../../utils/rest";

const AccountPage = () => {
  const { token, role } = useContext(UserContext);

  const [userRole, setUserRole] = useState("");
  const [name, setName] = useState("");

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
    if (role === "customer") {
      setUserRole("customer");
    } else {
      setUserRole("partner");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await get(`/api/v1/name/${token}`);

      if (res.success === true) {
        setName(res.data);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!token ? <Redirect to="/login" /> : null}
      <section className="account">
        <div className="container container--small">
          <h1 className="account__title">Herzlich Willkommen, {name}!</h1>
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
