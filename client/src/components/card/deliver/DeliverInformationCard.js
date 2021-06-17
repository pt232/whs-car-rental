import React, { useContext } from "react";
import {
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FilterContext } from "../../../context/filter/FilterState";
import Card from "../Card";
import CarPartnerItem from "../car/item/CarPartnerItem";
import "./DeliverInformationCard.css";
import DeliverInformationList from "../../list/deliver/DeliverInformationList";
import { formatDate } from "../../../utils/helpers";

const DeliverInformationCard = ({ partner, station }) => {
  const { locationFilter, timeFilter } = useContext(FilterContext);
  const items = [
    {
      icon: faMapMarkerAlt,
      title: "Abholstation",
      content: station
        ? station.zipCode + " " + locationFilter + ", " + station.street
        : "",
    },
    {
      icon: faCalendarAlt,
      title: "Abholdatum",
      content: formatDate(timeFilter.startDate),
    },

    {
      icon: faCalendarAlt,
      title: "Rückgabedatum",
      content: formatDate(timeFilter.endDate),
    },
  ];

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
