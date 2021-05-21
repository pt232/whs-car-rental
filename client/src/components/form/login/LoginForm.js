import React from "react";
import Card from "../../card/Card";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <Card>
      <form className="login-form">
        <div className="login-form__container">
          <label htmlFor="mail" className="login-form__label">
            E-Mail-Adresse
          </label>
          <input
            type="email"
            className="login-form__input"
            id="mail"
            required
          />
        </div>
        <div className="login-form__container">
          <label htmlFor="pw" className="login-form__label">
            Passwort
          </label>
          <input
            type="password"
            className="login-form__input"
            id="pw"
            required
          />
        </div>
        <div className="login-form__container">
          <div className="login-form__remember">
            <div className="login-form__option">
              <input
                type="checkbox"
                id="remember"
                className="login-form__checkbox"
              />
              <label
                htmlFor="remember"
                className="login-form__label login-form__label--small"
              >
                Angemeldet bleiben
              </label>
            </div>
            <span className="login-form__label--small">Passwort vergessen</span>
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
