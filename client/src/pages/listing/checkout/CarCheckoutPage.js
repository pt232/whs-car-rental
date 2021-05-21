import React from "react";
import DeliverInformationCard from "../../../components/card/deliver/DeliverInformationCard";
import OverviewCard from "../../../components/card/overview/OverviewCard";
import CheckoutForm from "../../../components/form/checkout/CheckoutForm";
import "./CarCheckoutPage.css";

const CarCheckoutPage = () => {
  return (
    <section className="checkout">
      <div className="container container--small">
        <h1 className="checkout__title">Kasse</h1>
        <div className="checkout__content">
          <aside className="checkout__information">
            <DeliverInformationCard />
            <OverviewCard displayBtn={false} />
          </aside>
          <div className="checkout__form">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarCheckoutPage;
