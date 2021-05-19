import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { containerSizeAtLocation } from "../../utils/helpers";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className={`container ${containerSizeAtLocation(location)}`}>
        <ul className="footer__links">
          <div className="footer__items">
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Impressum
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Datenschutz
              </Link>
            </li>
          </div>
          <div className="footer__items">
            <li className="footer__item">
              <Link to="/" className="footer__social">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__social">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
