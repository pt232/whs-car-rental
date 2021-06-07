import React, { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";

const Card = (props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className={`card ${props.filterCard ? "card--filter" : ""}`}
      style={{ marginTop: props.marginTop, padding: props.padding }}
    >
      {props.title ? (
        <div className="card__header">
          <h3 className="card__title">{props.title}</h3>
          {props.collapsible ? (
            <FontAwesomeIcon
              icon={faPlus}
              className="card__plus"
              onClick={() => setShowMore((prevValue) => !prevValue)}
            />
          ) : null}
        </div>
      ) : null}
      {showMore || !props.collapsible ? props.children : null}
    </div>
  );
};

export default Card;
