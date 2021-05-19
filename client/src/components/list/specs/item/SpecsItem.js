import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SpecsItem.css";

const SpecsItem = ({ name, icon }) => {
  return (
    <div className="specs-item">
      <div className="specs-item__information">
        <div className="specs-item__icon-wrapper">
          <FontAwesomeIcon icon={icon} className="specs-item__icon" />
        </div>
        <div className="specs-item__data">
          <h3 className="specs-item__title">{name}</h3>
          <span className="specs-item__additionals">Mehr Informationen</span>
        </div>
      </div>
      <button className="specs-item__btn btn btn--transparent">
        Hinzufügen
      </button>
    </div>
  );
};

export default SpecsItem;
