import React, { useEffect, useContext } from "react";
import { ReservationContext } from "../../../context/reservation/ReservationState";
import { LoadingSpinner } from "../../spinner/LoadingSpinner";
import ReservationCard from "../../card/reservation/ReservationCard";
import "./ReservationList.css";

const ReservationList = ({ back }) => {
  const {
    reservations,
    updateTrigger,
    loading,
    getReservations,
    getBackProtocolReservations,
  } = useContext(ReservationContext);

  useEffect(() => {
    if (!back) {
      getReservations(
        localStorage.getItem("token"),
        localStorage.getItem("role")
      );
    } else {
      getBackProtocolReservations(localStorage.getItem("token"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateTrigger]);

  return (
    <div className="reservation-list">
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "6rem 0",
          }}
        >
          <LoadingSpinner />
        </div>
      ) : reservations.length !== 0 ? (
        reservations.map((reservation, index) => {
          return (
            <ReservationCard
              key={index}
              reservation={reservation}
              back={back}
            />
          );
        })
      ) : (
        <p
          style={{
            margin: "4rem 0",
            fontSize: "1.4rem",
          }}
        >
          {localStorage.getItem("role") === "customer"
            ? "Bis jetzt haben Sie noch keine Reservierungen getätigt."
            : back
            ? "Bis jetzt wurden noch keine Rücknahmeprotokolle von Ihnen erstellt"
            : "Bis jetzt wurden noch keine Reservierung bei Ihnen getätigt"}
        </p>
      )}
    </div>
  );
};

export default ReservationList;
