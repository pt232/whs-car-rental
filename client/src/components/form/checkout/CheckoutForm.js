import React from "react";
import Card from "../../card/Card";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  return (
    <Card>
      <h3 className="checkout-form__title">Rechnungsadresse</h3>
      <form className="checkout-form">
        <div className="checkout-form__options">
          <div className="checkout-form__option">
            <input type="checkbox" id="checkoutMale" className="checkbox" />
            <label htmlFor="checkoutMale" className="checkout-form__label">
              Herr
            </label>
          </div>
          <div className="checkout-form__option">
            <input type="checkbox" id="checkoutFemale" className="checkbox" />
            <label htmlFor="checkoutFemale" className="checkout-form__label">
              Frau
            </label>
          </div>
        </div>
        <div className="checkout-form__row">
          <div className="checkout-form__container">
            <label htmlFor="checkoutName" className="label">
              Vorname <span className="checkout-form__required">*</span>
            </label>
            <input type="text" className="input" id="checkoutName" required />
          </div>
          <div className="checkout-form__container">
            <label htmlFor="checkoutLastName" className="label">
              Nachname <span className="checkout-form__required">*</span>
            </label>
            <input
              type="text"
              className="input"
              id="checkoutLastName"
              required
            />
          </div>
        </div>
        <div className="checkout-form__row">
          <div className="checkout-form__container">
            <label htmlFor="checkoutMail" className="label">
              E-Mail-Adresse <span className="checkout-form__required">*</span>
            </label>
            <input type="email" className="input" id="checkoutMail" required />
          </div>
          <div className="checkout-form__container">
            <label htmlFor="checkoutTelephone" className="label">
              Telefonnummer
            </label>
            <input type="telephone" className="input" id="checkoutTelephone" />
          </div>
        </div>
        <div className="checkout-form__row">
          <div className="checkout-form__container">
            <label htmlFor="checkoutCountry" className="label">
              Land
            </label>
            <div className="registration-form__wrapper">
              <select id="checkoutCountry" className="checkout-form__select">
                <option value="Deutschland">Deutschland</option>
              </select>
            </div>
          </div>
          <div className="checkout-form__container">
            <label htmlFor="checkoutTelephone" className="label">
              Ort <span className="checkout-form__required">*</span>
            </label>
            <input
              type="telephone"
              className="input"
              id="checkoutTelephone"
              required
            />
          </div>
        </div>
        <div className="checkout-form__row">
          <div className="checkout-form__container">
            <label htmlFor="checkoutStreet" className="label">
              Straße und Hausnummer{" "}
              <span className="checkout-form__required">*</span>
            </label>
            <input type="text" className="input" id="checkoutStreet" required />
          </div>
          <div className="checkout-form__container">
            <label htmlFor="checkoutCityCode" className="label">
              Postleitzahl <span className="checkout-form__required">*</span>
            </label>
            <input
              type="text"
              className="input"
              id="checkoutCityCode"
              required
            />
          </div>
        </div>
        <button type="submit" className="checkout-form__btn btn btn--filled">
          Jetzt kostenpflichtig bestellen!
        </button>
      </form>
    </Card>
  );
};

export default CheckoutForm;
