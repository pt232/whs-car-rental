import React, { useState } from "react";
import { post } from "../../../utils/rest";
import Card from "../Card";
import MessageList from "../../list/message/MessageList";
import "./BookingCard.css";

const BookingCard = ({ carId }) => {
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setErrors([]);
    setSuccess([]);

    if (loading) return;

    setLoading(true);

    const token = localStorage.getItem("token");
    const res = await post("/api/v1/reservation", {
      token,
      carId,
    });

    if (res.success) {
      setErrors([]);
      setSuccess((prevValue) => [...prevValue, res.data]);
    } else {
      setErrors((prevValue) => [...prevValue, res.data]);
    }

    setLoading(false);
  };

  return (
    <Card>
      <h3 className="booking-card__title">
        Jetzt kostenpflichtig reservieren!
      </h3>
      {errors.length > 0 ? <MessageList items={errors} type="error" /> : null}
      {success.length > 0 ? (
        <MessageList items={success} type="success" />
      ) : null}
      <p className="booking-card__text">
        Mit dem Klick auf "Reservierung abschließen" erhalten Sie eine
        Bestätigungsmail. Daraufhin können Sie die Reservierung innerhalb von 24
        Stunden stornieren. Danach betrachten wir die Reservierung als
        verbindlich.
      </p>
      <button
        className="booking-card__btn btn btn--filled"
        onClick={() => handleClick()}
      >
        Reservierung abschließen
      </button>
    </Card>
  );
};

export default BookingCard;
