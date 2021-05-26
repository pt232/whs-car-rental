import React from "react";
import Card from "../../card/Card";
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
            <input type="text" className="input" id="regName" />
          </div>
          <div className="registration-form__container">
            <label htmlFor="regLastName" className="label">
              Nachname <span className="registration-form__required">*</span>
            </label>
            <input type="text" className="input" id="regLastName" />
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
            <input type="email" className="input" id="regMail" />
          </div>
        </div>
        <div className="registration-form__row">
          <div className="registration-form__container">
            <label htmlFor="regPw" className="label">
              Passwort <span className="registration-form__required">*</span>
            </label>
            <input type="email" className="input" id="regPw" />
          </div>
          <div className="registration-form__container">
            <label htmlFor="regPwRepeat" className="label">
              Passwort wiederholen{" "}
              <span className="registration-form__required">*</span>
            </label>
            <input type="email" className="input" id="regPwRepeat" />
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
