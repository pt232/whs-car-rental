import React, { useState } from "react";
import { post } from "../../../utils/rest";
import Card from "../../card/Card";
import MessageList from "../../list/message/MessageList";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const phonePattern = /^[0-9]+$/;
    const mailPattern = /\S+@\S+\.\S+/;
    let validation = true;

    setErrors([]);
    setSuccess([]);

    if (phone && !phonePattern.test(phone)) {
      setErrors((prevValue) => [
        ...prevValue,
        "Die angegebene Telefonnummer ist ungültig",
      ]);
      validation = false;
    }

    if (!mailPattern.test(email)) {
      setErrors((prevValue) => [
        ...prevValue,
        "Die angegebene E-Mail ist ungültig",
      ]);
      validation = false;
    }

    if (password !== passwordRepeat) {
      setErrors((prevValue) => [
        ...prevValue,
        "Die angegebenen Passwörter sind nicht gleich",
      ]);
      validation = false;
    }

    if (password.length <= 6 || passwordRepeat.length <= 6) {
      setErrors((prevValue) => [
        ...prevValue,
        "Das Passwort sollte mehr als 6 Zeichen haben",
      ]);
      validation = false;
    }

    if (validation) {
      setLoading(true);

      const res = await post("/api/v1/register", {
        firstName,
        lastName,
        phone,
        email,
        password,
      });

      if (res.success === true) {
        setSuccess((prevValue) => [...prevValue, res.data]);
      } else {
        setErrors((prevValue) => [...prevValue, res.data]);
      }

      setLoading(false);
    }
  };

  return (
    <Card>
      {errors.length > 0 ? <MessageList items={errors} type="error" /> : null}
      {success.length > 0 ? (
        <MessageList items={success} type="success" />
      ) : null}
      <form className="registration-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="registration-form__row">
          <div className="registration-form__container">
            <label htmlFor="regName" className="label">
              Vorname <span className="registration-form__required">*</span>
            </label>
            <input
              type="text"
              className="input"
              id="regName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="registration-form__container">
            <label htmlFor="regLastName" className="label">
              Nachname <span className="registration-form__required">*</span>
            </label>
            <input
              type="text"
              className="input"
              id="regLastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="registration-form__row">
          <div className="registration-form__container">
            <label htmlFor="regTelephone" className="label">
              Telefonnummer
            </label>
            <input
              type="telephone"
              className="input"
              id="regTelephone"
              value={phone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <div className="registration-form__container">
            <label htmlFor="regMail" className="label">
              E-Mail-Adresse{" "}
              <span className="registration-form__required">*</span>
            </label>
            <input
              type="email"
              className="input"
              id="regMail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="registration-form__row">
          <div className="registration-form__container">
            <label htmlFor="regPw" className="label">
              Passwort <span className="registration-form__required">*</span>
            </label>
            <div className="registration-form__input">
              <input
                type="password"
                className="input"
                id="regPw"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="registration-form__container">
            <label htmlFor="regPwRepeat" className="label">
              Passwort wiederholen{" "}
              <span className="registration-form__required">*</span>
            </label>
            <div className="registration-form__input">
              <input
                type="password"
                className="input"
                id="regPwRepeat"
                value={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="registration-form__btn btn btn--filled"
        >
          Jetzt Registrieren!
        </button>
      </form>
    </Card>
  );
};

export default RegistrationForm;
