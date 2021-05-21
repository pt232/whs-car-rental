import React from "react";
import Card from "../../card/Card";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  return (
    <Card>
      <form className="registration-form">
        <div className="registration-form__row">
          <div className="registration-form__container">
            <label htmlFor="name" className="login-form__label">
              Vorname <span className="login-form__required">*</span>
            </label>
            <input type="text" className="login-form__input" id="mail" />
          </div>
          <div className="registration-form__container">
            <label htmlFor="lastName" className="login-form__label">
              Nachname <span className="login-form__required">*</span>
            </label>
            <input type="text" className="login-form__input" id="lastName" />
          </div>
        </div>
        <div className="registration-form__row">
          <div className="registration-form__container">
            <label htmlFor="telephone" className="login-form__label">
              Telefonnummer
            </label>
            <input
              type="telephone"
              className="login-form__input"
              id="telephone"
            />
          </div>
          <div className="registration-form__container">
            <label htmlFor="mail" className="login-form__label">
              E-Mail-Adresse <span className="login-form__required">*</span>
            </label>
            <input type="email" className="login-form__input" id="mail" />
          </div>
        </div>
        <div className="registration-form__row">
          <div className="registration-form__container">
            <label htmlFor="pw" className="login-form__label">
              Passwort <span className="login-form__required">*</span>
            </label>
            <input type="email" className="login-form__input" id="pw" />
          </div>
          <div className="registration-form__container">
            <label htmlFor="pwRepeat" className="login-form__label">
              Passwort wiederholen{" "}
              <span className="login-form__required">*</span>
            </label>
            <input type="email" className="login-form__input" id="pwRepeat" />
          </div>
        </div>
        <div className="login-form__container">
          <div className="login-form__remember">
            <div className="login-form__option">
              <input
                type="checkbox"
                id="remember"
                className="login-form__checkbox"
              />
              <label
                htmlFor="remember"
                className="login-form__label login-form__label--small"
              >
                Ich akzeptiere die Datenschutzbestimmungen
              </label>
            </div>
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
