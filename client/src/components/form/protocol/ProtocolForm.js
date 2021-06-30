import React, { useState, useContext } from "react";
import { ReservationContext } from "../../../context/reservation/ReservationState";
import { UserContext } from "../../../context/user/UserState";
import { post } from "../../../utils/rest";
import MessageList from "../../list/message/MessageList";
import "./ProtocolForm.css";

const ProtocolForm = ({ reservation }) => {
  const { id, car, customer, reservationFrom, reservationTo } = reservation;

  const { getReservations } = useContext(ReservationContext);
  const { token, role } = useContext(UserContext);

  const [name, setName] = useState(
    customer.firstName + " " + customer.lastName
  );
  const [carName, setCarName] = useState(car.carBrand.name + " " + car.name);
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
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const mailPattern = /\S+@\S+\.\S+/;
    let validation = true;

    setErrors([]);

    if (!mailPattern.test(email)) {
      setErrors((prevValue) => [
        ...prevValue,
        "Die angegebene E-Mail ist ungültig",
      ]);
      validation = false;
    }

    if (validation) {
      setLoading(true);

      const res = await post("/api/v1/document/protocol", {
        reservationId: id,
        carId: car.id,
        customerId: customer.id,
        data: {
          name,
          carName,
          email,
          dateFrom,
          dateTo,
          address,
          fuel,
          mileage,
          annotation,
        },
      });

      if (res.success === true) {
        getReservations(token, role);
        setLoading(false);
      } else {
        setErrors((prevValue) => [...prevValue, res.data]);
        setLoading(false);
      }
    }
  };

  return (
    <>
      {errors.length > 0 ? <MessageList items={errors} type="error" /> : null}
      <form className="protocol-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="protocol-form__row">
          <div className="protocol-form__container">
            <label htmlFor="prName" className="label">
              Name <span className="protocol-form__required">*</span>
            </label>
            <input
              type="text"
              className="input"
              id="prName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="protocol-form__container">
            <label htmlFor="prLastName" className="label">
              Mietwagen <span className="protocol-form__required">*</span>
            </label>
            <input
              type="text"
              className="input"
              id="prLastName"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="protocol-form__row">
          <div className="protocol-form__container">
            <label htmlFor="prMail" className="label">
              E-Mail-Adresse <span className="protocol-form__required">*</span>
            </label>
            <input
              type="email"
              className="input"
              id="prMail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="protocol-form__container">
            <label htmlFor="prAddress" className="label">
              Adresse <span className="protocol-form__required">*</span>
            </label>
            <input
              type="text"
              className="input"
              id="prAddress"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="protocol-form__row">
          <div className="protocol-form__container">
            <label htmlFor="conResFrom" className="label">
              Reservierung von{" "}
              <span className="protocol-form__required">*</span>
            </label>
            <div className="protocol-form__wrapper">
              <input
                type="datetime-local"
                className="protocol-form__input input"
                id="conResFrom"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="protocol-form__container">
            <label htmlFor="conResTo" className="label">
              Reservierung bis{" "}
              <span className="protocol-form__required">*</span>
            </label>
            <div className="protocol-form__wrapper">
              <input
                type="datetime-local"
                className="protocol-form__input input"
                id="conResTo"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="protocol-form__row">
          <div className="protocol-form__container">
            <label htmlFor="conFuel" className="label">
              Füllstand in Liter{" "}
              <span className="protocol-form__required">*</span>
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
          <div className="protocol-form__container">
            <label htmlFor="conMileage" className="label">
              Gefahrene Kilometer{" "}
              <span className="protocol-form__required">*</span>
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
        <div className="protocol-form__row">
          <div className="protocol-form__container">
            <label htmlFor="prAnnotation" className="label">
              Anmerkungen
            </label>
            <textarea
              className="protocol-form__area input"
              id="prAnnotation"
              value={annotation}
              onChange={(e) => setAnnotation(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          style={loading ? { backgroundColor: "#91b2f9" } : null}
          className="protocol-form__btn btn btn--filled"
        >
          {loading
            ? "Rücknahmeprotokoll erstellen..."
            : "Rücknahmeprotokoll erstellen"}
        </button>
      </form>
    </>
  );
};

export default ProtocolForm;
