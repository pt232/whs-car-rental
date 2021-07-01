import React, { useState } from "react";
import { calculateAge, minAgeToDate } from "../../../utils/helpers";
import "./TwoDriversForm.css";

const TwoDriversForm = ({
  addDriver,
  removeDriver,
  addError,
  removeErrors,
}) => {
  const [birthday, setBirthday] = useState("");
  const [driverAdded, setDriverAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    removeErrors();

    if (birthday.length > 0) {
      if (driverAdded) {
        removeDriver();
        setBirthday("");
        setDriverAdded(false);
      } else {
        if (calculateAge(new Date(birthday)) < 25) {
          addDriver();
        }
        setDriverAdded(true);
      }
    } else addError();
  };

  return (
    <>
      <p className="drivers-form__text">
        Mit diesem Mietwagen haben Sie die Möglichkeit einen zweiten Fahrer
        einzutragen. Bei einem Zweitfahrer <b>unter 25 Jahren</b> wird ein
        Aufschlag von 25% auf die Basisrate berechnet.
      </p>
      <form className="drivers-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="date"
          className="drivers-form__input input"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          max={minAgeToDate(18)}
        />
        <button
          type="submit"
          style={
            driverAdded ? { color: "#d8000c", backgroundColor: "#ffbaba" } : {}
          }
          className="drivers-form__btn btn btn--filled"
        >
          {driverAdded ? "Zweitfahrer entfernen" : "Zweitfahrer eintragen"}
        </button>
      </form>
    </>
  );
};

export default TwoDriversForm;
