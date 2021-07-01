import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FilterContext } from "../../../context/filter/FilterState";
import { ReservationContext } from "../../../context/reservation/ReservationState";
import { UserContext } from "../../../context/user/UserState";
import { post } from "../../../utils/rest";
import Card from "../Card";
import MessageList from "../../list/message/MessageList";
import TwoDriversForm from "../../form/drivers/TwoDriversForm";
import "./BookingCard.css";

const BookingCard = ({
  carId,
  partnerId,
  twoDrivers,
  info,
  removeInfoText,
}) => {
  const { timeFilter, removeLocationFilter } = useContext(FilterContext);
  const { setDriversFee } = useContext(ReservationContext);
  const { token } = useContext(UserContext);

  const [secondDriver, setSecondDriver] = useState(false);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setDriversFee(secondDriver);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondDriver]);

  const handleClick = async () => {
    setErrors([]);
    setSuccess([]);
    removeInfoText();

    if (loading) return;

    setLoading(true);

    const res = await post("/api/v1/reservation", {
      token,
      carId,
      partnerId,
      secondDriver,
      reservationFrom: timeFilter.startDate,
      reservationTo: timeFilter.endDate,
    });

    if (res.success) {
      setErrors([]);
      setSuccess((prevValue) => [...prevValue, res.data]);
      setLoading(false);
    } else {
      setErrors((prevValue) => [...prevValue, res.data]);
      setLoading(false);
    }
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
      {twoDrivers === true ? (
        <TwoDriversForm
          addDriver={() => setSecondDriver(true)}
          removeDriver={() => setSecondDriver(false)}
          addError={() =>
            setErrors((prevValue) => [
              ...prevValue,
              "Bitte tragen Sie ein Geburtsdatum ein",
            ])
          }
          removeErrors={() => setErrors([])}
        />
      ) : null}
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
