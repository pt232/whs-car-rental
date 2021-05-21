import React from "react";
import Card from "../../card/Card";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  return (
    <Card>
      <h3 className="checkout-form__title">Rechnungsadresse</h3>
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
        <button
          style={{ width: "100%", maxWidth: "100%" }}
          type="submit"
          className="registration-form__btn btn btn--filled"
        >
          Jetzt kostenpflichtig bestellen!
        </button>
      </form>
    </Card>
  );
};

export default CheckoutForm;
