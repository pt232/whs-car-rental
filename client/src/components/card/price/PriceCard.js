import React from "react";
import { Link } from "react-router-dom";
import "./PriceCard.css";

const PriceCard = () => {
  return (
    <div className="price-card">
      <div className="price-card__information">
        <h5 className="price-card__days">Insgesamt 7 Tage</h5>
        <h3 className="price-card__price">
          <span>&#8364;</span> 1595
        </h3>
        <span className="price-card__day">&#8364;225/Tag</span>
      </div>
      <Link to="/listing/extras" className="price-card__btn btn btn--filled">
        Jetzt Reservieren!
      </Link>
    </div>
  );
};

export default PriceCard;
