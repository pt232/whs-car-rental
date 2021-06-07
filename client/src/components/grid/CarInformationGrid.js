import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./CarInformationGrid.css";

const CarInformationGrid = ({ carType }) => {
  return (
    <div className="information-grid">
      <div className="information-grid__item">
        <FontAwesomeIcon
          icon={carType.navigation ? faCheckCircle : faTimesCircle}
          className={`information-grid__icon ${
            !carType.navigation ? "information-grid__icon--not" : ""
          }`}
        />
        <span className="information-grid__property">Navigation</span>
      </div>
      <div className="information-grid__item">
        <FontAwesomeIcon
          icon={carType.winterTires ? faCheckCircle : faTimesCircle}
          className={`information-grid__icon ${
            !carType.winterTires ? "information-grid__icon--not" : ""
          }`}
        />
        <span className="information-grid__property">Winterreifen</span>
      </div>
      <div className="information-grid__item">
        <FontAwesomeIcon
          icon={carType.insurance ? faCheckCircle : faTimesCircle}
          className={`information-grid__icon ${
            !carType.insurance ? "information-grid__icon--not" : ""
          }`}
        />
        <span className="information-grid__property">
          Haftpflichtversicherung
        </span>
      </div>
      <div className="information-grid__item">
        <FontAwesomeIcon
          icon={
            carType.freeKilometers === "750" ? faCheckCircle : faTimesCircle
          }
          className={`information-grid__icon ${
            carType.freeKilometers !== "750"
              ? "information-grid__icon--not"
              : ""
          }`}
        />
        <span className="information-grid__property">Freikilometer: 750km</span>
      </div>
      <div className="information-grid__item">
        <FontAwesomeIcon
          icon={
            carType.freeKilometers === "1500" ? faCheckCircle : faTimesCircle
          }
          className={`information-grid__icon ${
            carType.freeKilometers !== "1500"
              ? "information-grid__icon--not"
              : ""
          }`}
        />
        <span className="information-grid__property">
          Freikilometer: 1500km
        </span>
      </div>
      <div className="information-grid__item">
        <FontAwesomeIcon
          icon={carType.protection ? faCheckCircle : faTimesCircle}
          className={`information-grid__icon ${
            !carType.protection ? "information-grid__icon--not" : ""
          }`}
        />
        <span className="information-grid__property">
          Glas- &amp; Reifenschutz
        </span>
      </div>
      <div className="information-grid__item">
        <FontAwesomeIcon
          icon={carType.twoDrivers ? faCheckCircle : faTimesCircle}
          className={`information-grid__icon ${
            !carType.twoDrivers ? "information-grid__icon--not" : ""
          }`}
        />
        <span className="information-grid__property">Zweifahreroption</span>
      </div>
    </div>
  );
};

export default CarInformationGrid;
