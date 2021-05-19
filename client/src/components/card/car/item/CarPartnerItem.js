import React from "react";
import carPartner from "../../../../images/car-partner.jpg";
import "./CarPartnerItem.css";

const CarPartnerItem = () => {
  return (
    <div className="car-partner">
      <img src={carPartner} alt="Car Partner" className="car-partner__image" />
      <div className="car-partner__information">
        <div className="car-partner__name">Partner: John Doe</div>
        <div className="car-partner__phone">+49 123 999 999</div>
      </div>
    </div>
  );
};

export default CarPartnerItem;
