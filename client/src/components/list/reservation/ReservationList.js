import React, { useEffect, useContext } from "react";
import { ReservationContext } from "../../../context/reservation/ReservationState";
import { LoadingSpinner } from "../../spinner/LoadingSpinner";
import ReservationCard from "../../card/reservation/ReservationCard";
import "./ReservationList.css";

const ReservationList = () => {
  const { reservations, updateTrigger, loading, getReservations } =
    useContext(ReservationContext);

  useEffect(() => {
    getReservations(
      localStorage.getItem("token"),
      localStorage.getItem("role")
    );
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
          return <ReservationCard key={index} reservation={reservation} />;
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
            : "Bis jetzt wurde noch keine Reservierung bei Ihnen getätigt"}
        </p>
      )}
    </div>
  );
};

export default ReservationList;
