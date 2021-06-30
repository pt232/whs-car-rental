import React, { useEffect, useContext } from "react";
import { ReservationContext } from "../../../context/reservation/ReservationState";
import { UserContext } from "../../../context/user/UserState";
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
  const { token, role } = useContext(UserContext);

  useEffect(() => {
    if (!back) {
      getReservations(token, role);
    } else {
      getBackProtocolReservations(token);
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
          {role === "customer"
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
