import React from "react";
import "./Card.css";

const Card = ({ children, title, filterCard, marginTop, padding }) => {
  return (
    <div
      className={`card ${filterCard ? "card--filter" : ""}`}
      style={{ marginTop, padding }}
    >
      {title ? <h3 className="card__title">{title}</h3> : null}
      {children}
    </div>
  );
};

export default Card;
