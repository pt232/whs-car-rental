import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faCheckCircle,
  faUserCircle,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./DashboardNavbar.css";

const DashboardNavbar = ({ handler, activeTab }) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <ul className="dashboard-nav">
      <li
        className={`dashboard-nav__item ${
          activeTab === 0 ? "dashboard-nav__item--selected" : ""
        }`}
        onClick={() => handler(0)}
      >
        <FontAwesomeIcon icon={faThLarge} className="dashboard-nav__icon" />
        <span className="dashboard-nav__link">Dashboard</span>
      </li>
      <li className="dashboard-nav__item">
        <FontAwesomeIcon icon={faCheckCircle} className="dashboard-nav__icon" />
        <span className="dashboard-nav__link">Reservierungen</span>
      </li>
      <li
        className={`dashboard-nav__item ${
          activeTab === 2 ? "dashboard-nav__item--selected" : ""
        }`}
        onClick={() => handler(2)}
      >
        <FontAwesomeIcon icon={faUserCircle} className="dashboard-nav__icon" />
        <span className="dashboard-nav__link">Account</span>
      </li>
      <li className="dashboard-nav__item">
        <FontAwesomeIcon icon={faCog} className="dashboard-nav__icon" />
        <span className="dashboard-nav__link">Eintellungen</span>
      </li>
      <li className="dashboard-nav__item" onClick={() => logout()}>
        <FontAwesomeIcon icon={faSignOutAlt} className="dashboard-nav__icon" />
        <span className="dashboard-nav__link">Abmelden</span>
      </li>
    </ul>
  );
};

export default DashboardNavbar;
