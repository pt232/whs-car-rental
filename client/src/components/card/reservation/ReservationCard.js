import React, { useContext } from "react";
import { ReservationContext } from "../../../context/reservation/ReservationState";
import CarPartnerItem from "../car/item/CarPartnerItem";
import "./ReservationCard.css";

const ReservationCard = ({ id, status, car, partner }) => {
  const { updateReservationStatus } = useContext(ReservationContext);

  return (
    <div className="reservation-card">
      <div>
        <h3 className="reservation-card__title">{car.carType.carClass.name}</h3>
        <h3 className="reservation-card__subtitle">
          {car.carBrand.name + " " + car.name}
        </h3>
        <CarPartnerItem partner={partner} />
      </div>
      <div className="reservation-card__options">
        {status === "pending" ? (
          <>
            <button
              className="reservation-card__btn reservation-card__btn--accept btn"
              onClick={() => {
                updateReservationStatus(id, 3, car.id);
              }}
            >
              Akzeptieren
            </button>
            <button
              className="reservation-card__btn reservation-card__btn--cancel btn"
              onClick={() => {
                updateReservationStatus(id, 2, car.id);
              }}
            >
              Stornieren
            </button>
          </>
        ) : (
          <button className="reservation-card__btn reservation-card__btn--download btn">
            Mietvertrag herunterladen
          </button>
        )}
      </div>
    </div>
  );
};

export default ReservationCard;
