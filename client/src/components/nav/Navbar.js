import React from "react";
import { Link, useLocation } from "react-router-dom";
import { containerSizeAtLocation } from "../../utils/helpers";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <header>
      <div className={`container ${containerSizeAtLocation(location)}`}>
        <nav className="nav">
          <div className="nav__logo">
            <Link to="/">
              auto<span>vermietung.</span>
            </Link>
          </div>
          <ul className="nav__links">
            <li className="nav__item">
              <Link to="/listing" className="nav__link">
                Mietwagen finden
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Über uns
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Kontakt
              </Link>
            </li>
          </ul>
          <div className="nav__login">
            <Link to="/login" className="nav__link">
              Anmelden
            </Link>
            <Link to="/login" className="btn btn--transparent">
              Registrieren
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
