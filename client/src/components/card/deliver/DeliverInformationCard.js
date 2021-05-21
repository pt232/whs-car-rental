import React from "react";
import Card from "../Card";
import CarPartnerItem from "../car/item/CarPartnerItem";
import "./DeliverInformationCard.css";
import DeliverInformationList from "../../list/deliver/DeliverInformationList";

const DeliverInformationCard = () => {
  return (
    <Card>
      <div className="deliver-card">
        <h3 className="deliver-card__title">Lieferinformationen</h3>
        <DeliverInformationList />
        <CarPartnerItem />
      </div>
    </Card>
  );
};

export default DeliverInformationCard;
