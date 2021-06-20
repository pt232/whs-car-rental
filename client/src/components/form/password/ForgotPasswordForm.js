import React, { useState } from "react";
import { post } from "../../../utils/rest";
import Card from "../../card/Card";
import MessageList from "../../list/message/MessageList";
import "./ForgotPasswordForm.css";

const ForgotPasswordForm = ({ title }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const mailPattern = /\S+@\S+\.\S+/;
    let validation = true;

    setErrors([]);
    setSuccess([]);

    if (!mailPattern.test(email)) {
      setErrors((prevValue) => [
        ...prevValue,
        "Die angegebene E-Mail ist ungültig",
      ]);
      validation = false;
    }

    if (validation) {
      setLoading(true);

      const res = await post("/api/v1/forgot-password", {
        email,
      });

      if (res.success === true) {
        setSuccess((prevValues) => [...prevValues, res.data]);
      } else {
        setErrors((prevValues) => [...prevValues, res.data]);
      }

      setLoading(false);
    }
  };

  return (
    <Card>
      {title ? <h3 className="forgot-form__title">{title}</h3> : null}
      {errors.length > 0 ? <MessageList items={errors} type="error" /> : null}
      {success.length > 0 ? (
        <MessageList items={success} type="success" />
      ) : null}
      <form className="forgot-form" onSubmit={handleSubmit}>
        <div className="forgot-form__container">
          <label htmlFor="forgotMail" className="label">
            E-Mail-Adresse
          </label>
          <input
            type="email"
            className="input"
            id="forgotMail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="forgot-form__btn btn btn--filled">
          Passwort anfordern
        </button>
      </form>
    </Card>
  );
};

export default ForgotPasswordForm;
