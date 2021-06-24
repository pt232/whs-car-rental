import React, { useState } from "react";
import "./ContractForm.css";

const ContractForm = ({ reservation }) => {
  const { car, customer, reservationFrom, reservationTo } = reservation;
  const [firstName, setFirstName] = useState(customer.firstName);
  const [lastName, setLastName] = useState(customer.lastName);
  const [email, setEmail] = useState(customer.email);
  const [address, setAddress] = useState(
    car.rentalStation.zipCode +
      " " +
      car.rentalStation.city +
      ", " +
      car.rentalStation.street
  );
  const [dateFrom, setDateFrom] = useState(
    new Date(reservationFrom).toISOString().substring(0, 16)
  );
  const [dateTo, setDateTo] = useState(
    new Date(reservationTo).toISOString().substring(0, 16)
  );
  const [fuel, setFuel] = useState("");
  const [mileage, setMileage] = useState("");
  const [annotation, setAnnotation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <form className="contract-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="contract-form__row">
        <div className="contract-form__container">
          <label htmlFor="conName" className="label">
            Vorname <span className="contract-form__required">*</span>
          </label>
          <input
            type="text"
            className="input"
            id="conName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="contract-form__container">
          <label htmlFor="conLastName" className="label">
            Nachname <span className="contract-form__required">*</span>
          </label>
          <input
            type="text"
            className="input"
            id="conLastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="contract-form__row">
        <div className="contract-form__container">
          <label htmlFor="conMail" className="label">
            E-Mail-Adresse <span className="contract-form__required">*</span>
          </label>
          <input
            type="email"
            className="input"
            id="conMail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="contract-form__container">
          <label htmlFor="conAddress" className="label">
            Adresse <span className="contract-form__required">*</span>
          </label>
          <input
            type="text"
            className="input"
            id="conAddress"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="contract-form__row">
        <div className="contract-form__container">
          <label htmlFor="conResFrom" className="label">
            Reservierung von <span className="contract-form__required">*</span>
          </label>
          <div className="contract-form__wrapper">
            <input
              type="datetime-local"
              className="contract-form__input input"
              id="conResFrom"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="contract-form__container">
          <label htmlFor="conResTo" className="label">
            Reservierung bis <span className="contract-form__required">*</span>
          </label>
          <div className="contract-form__wrapper">
            <input
              type="datetime-local"
              className="contract-form__input input"
              id="conResTo"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <div className="contract-form__row">
        <div className="contract-form__container">
          <label htmlFor="conFuel" className="label">
            Füllstand in Liter{" "}
            <span className="contract-form__required">*</span>
          </label>
          <input
            type="number"
            className="input"
            id="conFuel"
            min="0"
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
            required
          />
        </div>
        <div className="contract-form__container">
          <label htmlFor="conMileage" className="label">
            Kilometerstand <span className="contract-form__required">*</span>
          </label>
          <input
            type="number"
            className="input"
            id="conMileage"
            min="0"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="contract-form__row">
        <div className="contract-form__container">
          <label htmlFor="conAnnotation" className="label">
            Anmerkungen
          </label>
          <textarea
            type="email"
            className="contract-form__area input"
            id="conAnnotation"
            value={annotation}
            onChange={(e) => setAnnotation(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        style={loading ? { backgroundColor: "#91b2f9" } : null}
        className="contract-form__btn btn btn--filled"
      >
        {loading ? "Mietvertrag erstellen..." : "Mietvertrag erstellen"}
      </button>
    </form>
  );
};

export default ContractForm;
