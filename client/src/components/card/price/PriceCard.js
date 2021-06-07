import React from "react";
import { Link } from "react-router-dom";
import "./PriceCard.css";

const PriceCard = ({ id, price }) => {
  const calculatePriceByDays = (days) => {
    return price * days;
  };

  return (
    <div className="price-card">
      <div className="price-card__information">
        <h5 className="price-card__days">Insgesamt 7 Tage</h5>
        <h3 className="price-card__price">
          <span>&#8364;</span> {calculatePriceByDays(7)}
        </h3>
        <span className="price-card__day">&#8364;{price}/Tag</span>
      </div>
      <Link
        to={`/listing/checkout/${id}`}
        className="price-card__btn btn btn--filled"
      >
        Jetzt Reservieren!
      </Link>
    </div>
  );
};

export default PriceCard;
