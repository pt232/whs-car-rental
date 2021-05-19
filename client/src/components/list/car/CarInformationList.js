import React from "react";
import seatIcon from "../../../images/icons/car-seat.svg";
import doorIcon from "../../../images/icons/car-door.svg";
import acIcon from "../../../images/icons/car-ac.svg";
import fuelIcon from "../../../images/icons/car-fuel.svg";
import "./CarInformationList.css";

const CarInformationList = () => {
  return (
    <ul className="car-information">
      <li className="car-information__item">
        <img
          src={seatIcon}
          alt="Car Seat Icon"
          className="car-information__icon"
        />
        <span className="car-information__text">4 Sitze</span>
      </li>
      <li className="car-information__item">
        <img
          src={doorIcon}
          alt="Car Seat Icon"
          className="car-information__icon"
        />
        <span className="car-information__text">4 Türen</span>
      </li>
      <li className="car-information__item">
        <img
          src={acIcon}
          alt="Car Seat Icon"
          className="car-information__icon"
        />
        <span className="car-information__text">A/C</span>
      </li>
      <li className="car-information__item">
        <img
          src={fuelIcon}
          alt="Car Seat Icon"
          className="car-information__icon"
        />
        <span className="car-information__text">Diesel</span>
      </li>
    </ul>
  );
};

export default CarInformationList;
