import React from "react";
import "./TotalPriceItem.css";

const TotalPriceItem = () => {
  return (
    <div className="total-price">
      <p className="total-price__name">Gesamtkosten</p>
      <p className="total-price__value">225 &euro;</p>
    </div>
  );
};

export default TotalPriceItem;
