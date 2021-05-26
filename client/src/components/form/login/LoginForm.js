import React from "react";
import Card from "../../card/Card";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <Card>
      <form className="login-form">
        <div className="login-form__container">
          <label htmlFor="loginMail" className="label">
            E-Mail-Adresse
          </label>
          <input type="email" className="input" id="loginMail" required />
        </div>
        <div className="login-form__container">
          <label htmlFor="loginPw" className="label">
            Passwort
          </label>
          <input type="password" className="input" id="loginPw" required />
        </div>
        <div className="login-form__container">
          <div className="login-form__options">
            <div className="login-form__option">
              <input type="checkbox" id="loginRemember" className="checkbox" />
              <label htmlFor="loginRemember" className="label label--small">
                Angemeldet bleiben
              </label>
            </div>
            <span className="login-form__forgot label label--small">
              Passwort vergessen
            </span>
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
