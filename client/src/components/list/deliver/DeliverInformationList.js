import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DeliverInformationList.css";

const DeliverInformationList = ({ items, padding }) => {
  return (
    <ul style={{ padding: padding }} className="deliver-list">
      {items.map((item, index) => {
        return (
          <li key={index} className="deliver-list__item">
            <FontAwesomeIcon icon={item.icon} className="deliver-list__icon" />
            <div>
              <h4 className="deliver-list__heading">{item.title}</h4>
              <p className="deliver-list__text">{item.content}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default DeliverInformationList;
