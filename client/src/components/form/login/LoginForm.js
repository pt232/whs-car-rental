import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { post } from "../../../utils/rest";
import Card from "../../card/Card";
import MessageList from "../../list/message/MessageList";
import "./LoginForm.css";

const LoginForm = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [attemptNumber, setAttemptNumber] = useState(0);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const mailPattern = /\S+@\S+\.\S+/;
    let validation = true;

    setErrors([]);

    if (!mailPattern.test(email)) {
      setErrors((prevValue) => [
        ...prevValue,
        "Die angegebene E-Mail ist ungültig",
      ]);
      validation = false;
    }

    if (validation) {
      setLoading(true);

      const res = await post("/api/v1/login", {
        email,
        password,
        attemptNumber,
      });

      if (res.success === true) {
        localStorage.setItem("token", res.data);
        history.push("/account");
      } else {
        setAttemptNumber((prevValue) => prevValue + 1);
        setErrors((prevValues) => [...prevValues, res.data]);
      }

      setLoading(false);
    }
  };

  return (
    <Card>
      {title ? <h3 className="login-form__title">{title}</h3> : null}
      {errors.length > 0 ? <MessageList items={errors} type="error" /> : null}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form__container">
          <label htmlFor="loginMail" className="label">
            E-Mail-Adresse
          </label>
          <input
            type="email"
            className="input"
            id="loginMail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-form__container">
          <label htmlFor="loginPw" className="label">
            Passwort
          </label>
          <input
            type="password"
            className="input"
            id="loginPw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="login-form__container">
          <div className="login-form__wrapper">
            <Link to="/login" className="login-form__link">
              Neu hier? Jetzt registrieren!
            </Link>
            <Link to="/login/forgot-password" className="login-form__link">
              Passwort vergessen?
            </Link>
          </div>
        </div>
        <button type="submit" className="login-form__btn btn btn--filled">
          Anmelden
        </button>
      </form>
    </Card>
  );
};

export default LoginForm;
