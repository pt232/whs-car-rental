import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./DashboardNavbar.css";

const DashboardNavbar = ({ items, handler, activeTab }) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <ul className="dashboard-nav">
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className={`dashboard-nav__item ${
              activeTab === index ? "dashboard-nav__item--selected" : ""
            }`}
            onClick={() => handler(index)}
          >
            <FontAwesomeIcon icon={item.icon} className="dashboard-nav__icon" />
            <span className="dashboard-nav__link">{item.name}</span>
          </li>
        );
      })}
      <li className="dashboard-nav__item" onClick={() => logout()}>
        <FontAwesomeIcon icon={faSignOutAlt} className="dashboard-nav__icon" />
        <span className="dashboard-nav__link">Abmelden</span>
      </li>
    </ul>
  );
};

export default DashboardNavbar;
