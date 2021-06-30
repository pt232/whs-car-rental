import React from "react";
import "./TotalPriceItem.css";

const TotalPriceItem = ({ price, discount }) => {
  return (
    <div className="total-price">
      <p className="total-price__name">Gesamtkosten</p>
      <p className="total-price__value">
        {discount ? price - price * discount.discount : price} &euro;
      </p>
    </div>
  );
};

export default TotalPriceItem;
