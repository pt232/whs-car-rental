import React from "react";
import carPartner from "../../../../images/car-partner.jpg";
import "./CarPartnerItem.css";

const CarPartnerItem = ({ partner }) => {
  return (
    <div className="car-partner">
      <img src={carPartner} alt="Car Partner" className="car-partner__image" />
      <div className="car-partner__information">
        <div className="car-partner__name">Partner: {partner.name}</div>
        <div className="car-partner__phone">{partner.phone}</div>
      </div>
    </div>
  );
};

export default CarPartnerItem;
