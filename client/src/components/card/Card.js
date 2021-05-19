import React from "react";
import "./Card.css";

const Card = ({ children, title, filterCard, marginTop }) => {
  return (
    <div
      className={`card ${filterCard ? "card--filter" : ""}`}
      style={{ marginTop }}
    >
      {title ? <h3 className="card__title">{title}</h3> : null}
      {children}
    </div>
  );
};

export default Card;
