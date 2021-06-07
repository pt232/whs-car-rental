import React from "react";
import {
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../Card";
import CarPartnerItem from "../car/item/CarPartnerItem";
import "./DeliverInformationCard.css";
import DeliverInformationList from "../../list/deliver/DeliverInformationList";

const DeliverInformationCard = ({ partner }) => {
  const items = [
    {
      icon: faMapMarkerAlt,
      title: "Abholstation",
      content: "Neidenburger Str. 43, 45897 Gelsenkirchen",
    },
    {
      icon: faCalendarAlt,
      title: "Abholdatum",
      content: "Dienstag, 01.04.2055, 15:30 Uhr",
    },

    {
      icon: faCalendarAlt,
      title: "Rückgabedatum",
      content: "Montag, 01.04.2095, 12:30 Uhr",
    },
  ];

  console.log(partner);

  return (
    <Card>
      <div className="deliver-card">
        <h3 className="deliver-card__title">Lieferinformationen</h3>
        <DeliverInformationList items={items} />
        {partner && <CarPartnerItem partner={partner} />}
      </div>
    </Card>
  );
};

export default DeliverInformationCard;
