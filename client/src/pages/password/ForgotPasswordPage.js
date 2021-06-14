import React from "react";
import ForgotPasswordForm from "../../components/form/password/ForgotPasswordForm";
import "./ForgotPasswordPage.css";

const ForgotPasswordPage = () => {
  return (
    <section className="forgot-password">
      <div className="container container--small">
        <div className="forgot-password__content">
          <ForgotPasswordForm />
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
