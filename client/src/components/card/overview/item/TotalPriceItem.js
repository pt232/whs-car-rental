import React from "react";
import "./TotalPriceItem.css";

const TotalPriceItem = ({ price }) => {
  return (
    <div className="total-price">
      <p className="total-price__name">Gesamtkosten</p>
      <p className="total-price__value">{price} &euro;</p>
    </div>
  );
};

export default TotalPriceItem;
