import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FilterContext } from "../../../context/filter/FilterState";
import { UserContext } from "../../../context/user/UserState";
import { get, post } from "../../../utils/rest";
import Card from "../Card";
import MessageList from "../../list/message/MessageList";
import "./BookingCard.css";

const BookingCard = ({ id, carId, partnerId }) => {
  const { timeFilter, removeLocationFilter } = useContext(FilterContext);
  const { token } = useContext(UserContext);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;

    const fetchPrice = async () => {
      const res = await get(`/api/v1/car/price/${id}/${token}`);

      if (isMounted) {
        if (res.discount) {
          setInfo([
            "Sie haben bereits über unsere Autovermietung 10.000 km zurückgelegt. Dafür gibt es von uns einen Rabatt von 10%! 🎉",
          ]);
        }
      }
    };

    fetchPrice();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleClick = async () => {
    setErrors([]);
    setSuccess([]);
    setInfo([]);

    if (loading) return;

    setLoading(true);

    const res = await post("/api/v1/reservation", {
      token,
      carId,
      partnerId,
      reservationFrom: timeFilter.startDate,
      reservationTo: timeFilter.endDate,
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
      {info.length > 0 ? <MessageList items={info} type="info" /> : null}
      <p className="booking-card__text">
        Mit dem Klick auf "Reservierung abschließen" erhalten Sie eine
        Bestätigungsmail. Daraufhin können Sie die Reservierung innerhalb von 24
        Stunden stornieren. Danach betrachten wir die Reservierung als
        verbindlich.
      </p>
      {success.length > 0 ? (
        <button
          className="booking-card__btn btn btn--transparent"
          onClick={() => {
            removeLocationFilter();
            history.push("/account");
          }}
        >
          Reservierung einsehen
        </button>
      ) : (
        <button
          className="booking-card__btn btn btn--filled"
          style={loading ? { backgroundColor: "#91b2f9" } : null}
          onClick={() => handleClick()}
        >
          {loading ? "Reservieren..." : "Reservierung abschließen"}
        </button>
      )}
    </Card>
  );
};

export default BookingCard;
