import React, { useState, useContext } from "react";
import { ReservationContext } from "../../../context/reservation/ReservationState";
import { UserContext } from "../../../context/user/UserState";
import { get, post } from "../../../utils/rest";
import { dateDifferenceInDays } from "../../../utils/helpers";
import MessageList from "../../list/message/MessageList";
import "./ContractForm.css";

const ContractForm = ({ reservation }) => {
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

      const resPrice = await get(
        `/api/v1/car/price/${car.id}/${token}/?customerId=${customer.id}`
      );
      const days = dateDifferenceInDays(dateFrom, dateTo);

      const res = await post("/api/v1/document/contract", {
        reservationId: id,
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
          prices: {
            price: resPrice.price,
            priceList: resPrice.priceList,
            priceListTotal: resPrice.priceListTotal,
            discount: resPrice.discount,
            days,
          },
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
      <form className="contract-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="contract-form__row">
          <div className="contract-form__container">
            <label htmlFor="conName" className="label">
              Name <span className="contract-form__required">*</span>
            </label>
            <input
              type="text"
              className="input"
              id="conName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="contract-form__container">
            <label htmlFor="conLastName" className="label">
              Mietwagen <span className="contract-form__required">*</span>
            </label>
            <input
              type="text"
              className="input"
              id="conLastName"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
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
              Reservierung von{" "}
              <span className="contract-form__required">*</span>
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
              Reservierung bis{" "}
              <span className="contract-form__required">*</span>
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
    </>
  );
};

export default ContractForm;
