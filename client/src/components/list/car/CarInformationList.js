import React from "react";
import seatIcon from "../../../images/icons/car-seat.svg";
import doorIcon from "../../../images/icons/car-door.svg";
import acIcon from "../../../images/icons/car-ac.svg";
import automaticIcon from "../../../images/icons/car-automatic.svg";
import "./CarInformationList.css";

const CarInformationList = ({ carType }) => {
  return (
    <ul className="car-information">
      <li className="car-information__item">
        <img
          src={seatIcon}
          alt="Car Seat Icon"
          className="car-information__icon"
        />
        <span className="car-information__text">{carType.seats} Sitze</span>
      </li>
      <li className="car-information__item">
        <img
          src={doorIcon}
          alt="Car Door Icon"
          className="car-information__icon"
        />
        <span className="car-information__text">{carType.doors} Türen</span>
      </li>
      <li className="car-information__item">
        <img src={acIcon} alt="Car AC Icon" className="car-information__icon" />
        <span className="car-information__text">
          {carType.airConditioner === true ? "A/C" : "-/-"}
        </span>
      </li>
      <li className="car-information__item">
        <img
          src={automaticIcon}
          alt="Car Automatic Icon"
          style={{ width: "2rem" }}
          className="car-information__icon"
        />
        <span className="car-information__text">
          {carType.automatic === true ? "Automatik" : "Manuell"}
        </span>
      </li>
    </ul>
  );
};

export default CarInformationList;
