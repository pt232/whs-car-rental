import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faCheckCircle,
  faUserCircle,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./DashboardNavbar.css";

const DashboardNavbar = () => {
  return (
    <ul className="dashboard-nav">
      <li className="dashboard-nav__item dashboard-nav__item--selected">
        <FontAwesomeIcon icon={faThLarge} className="dashboard-nav__icon" />
        <span className="dashboard-nav__link">Dashboard</span>
      </li>
      <li className="dashboard-nav__item">
        <FontAwesomeIcon icon={faCheckCircle} className="dashboard-nav__icon" />
        <span className="dashboard-nav__link">Reservierungen</span>
      </li>
      <li className="dashboard-nav__item">
        <FontAwesomeIcon icon={faUserCircle} className="dashboard-nav__icon" />
        <span className="dashboard-nav__link">Account</span>
      </li>
      <li className="dashboard-nav__item">
        <FontAwesomeIcon icon={faCog} className="dashboard-nav__icon" />
        <span className="dashboard-nav__link">Eintellungen</span>
      </li>
      <li className="dashboard-nav__item">
        <FontAwesomeIcon icon={faSignOutAlt} className="dashboard-nav__icon" />
        <span className="dashboard-nav__link">Abmelden</span>
      </li>
    </ul>
  );
};

export default DashboardNavbar;
