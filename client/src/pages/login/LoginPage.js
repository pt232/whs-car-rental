import React from "react";
import LoginForm from "../../components/form/login/LoginForm";
import RegistrationForm from "../../components/form/registration/RegistrationForm";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <section className="login">
      <div className="login__wrapper container container--small">
        <div className="login__sign-in">
          <h2 className="login__title">Anmelden</h2>
          <LoginForm />
        </div>
        <div className="login__sign-up">
          <h2 className="login__title">Registrieren</h2>
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
