import React from "react";
import Card from "../../card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  return (
    <Card>
      <form className="registration-form">
        <div className="registration-form__row">
          <div className="registration-form__container">
            <label htmlFor="regName" className="label">
              Vorname <span className="registration-form__required">*</span>
            </label>
            <input type="text" className="input" id="regName" required />
          </div>
          <div className="registration-form__container">
            <label htmlFor="regLastName" className="label">
              Nachname <span className="registration-form__required">*</span>
            </label>
            <input type="text" className="input" id="regLastName" required />
          </div>
        </div>
        <div className="registration-form__row">
          <div className="registration-form__container">
            <label htmlFor="regTelephone" className="label">
              Telefonnummer
            </label>
            <input type="telephone" className="input" id="regTelephone" />
          </div>
          <div className="registration-form__container">
            <label htmlFor="regMail" className="label">
              E-Mail-Adresse{" "}
              <span className="registration-form__required">*</span>
            </label>
            <input type="email" className="input" id="regMail" required />
          </div>
        </div>
        <div className="registration-form__row">
          <div className="registration-form__container">
            <label htmlFor="regPw" className="label">
              Passwort <span className="registration-form__required">*</span>
            </label>
            <div className="registration-form__input">
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="registration-form__icon"
              />
              <input type="password" className="input" id="regPw" required />
            </div>
          </div>
          <div className="registration-form__container">
            <label htmlFor="regPwRepeat" className="label">
              Passwort wiederholen{" "}
              <span className="registration-form__required">*</span>
            </label>
            <div className="registration-form__input">
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="registration-form__icon"
              />
              <input
                type="password"
                className="input"
                id="regPwRepeat"
                required
              />
            </div>
          </div>
        </div>
        <div className="registration-form__container">
          <div className="registration-form__option">
            <input type="checkbox" id="regRemember" className="checkbox" />
            <label htmlFor="regRemember" className="label label--small">
              Ich akzeptiere die Datenschutzbestimmungen
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="registration-form__btn btn btn--filled"
        >
          Jetzt Registrieren!
        </button>
      </form>
    </Card>
  );
};

export default RegistrationForm;
