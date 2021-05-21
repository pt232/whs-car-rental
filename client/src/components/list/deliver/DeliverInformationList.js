import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./DeliverInformationList.css";

const DeliverInformationList = () => {
  return (
    <ul className="deliver-list">
      <li className="deliver-list__item">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="deliver-list__icon" />
        <div>
          <h4 className="deliver-list__heading">Abholstation</h4>
          <p className="deliver-list__text">
            Neidenburger Str. 43, 45897 Gelsenkirchen
          </p>
        </div>
      </li>
      <li className="deliver-list__item">
        <FontAwesomeIcon icon={faCalendarAlt} className="deliver-list__icon" />
        <div>
          <h4 className="deliver-list__heading">Abholdatum</h4>
          <p className="deliver-list__text">Dienstag, 01.04.2055, 15:30 Uhr</p>
        </div>
      </li>
      <li className="deliver-list__item">
        <FontAwesomeIcon icon={faCalendarAlt} className="deliver-list__icon" />
        <div>
          <h4 className="deliver-list__heading">Rückgabedatum</h4>
          <p className="deliver-list__text">Montag, 01.04.2095, 12:30 Uhr</p>
        </div>
      </li>
    </ul>
  );
};

export default DeliverInformationList;
