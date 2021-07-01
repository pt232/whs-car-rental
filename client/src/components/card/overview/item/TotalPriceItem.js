import React from "react";
import "./TotalPriceItem.css";

const TotalPriceItem = ({ basePrice, price, discount, driversFee }) => {
  const calculatePrice = () => {
    let total = price;

    if (discount) {
      total = total - total * discount.discount;
    }

    if (driversFee) {
      total = total + basePrice * driversFee.fee;
    }

    return total.toFixed(2);
  };

  return (
    <div className="total-price">
      <p className="total-price__name">Gesamtkosten</p>
      <p className="total-price__value">{calculatePrice()} &euro;</p>
    </div>
  );
};

export default TotalPriceItem;
