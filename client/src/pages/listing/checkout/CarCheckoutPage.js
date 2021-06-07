import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CarContext } from "../../../context/car/CarState";
import DeliverInformationCard from "../../../components/card/deliver/DeliverInformationCard";
import OverviewCard from "../../../components/card/overview/OverviewCard";
import CheckoutForm from "../../../components/form/checkout/CheckoutForm";
import "./CarCheckoutPage.css";
import { LoadingSpinner } from "../../../components/spinner/LoadingSpinner";

const CarCheckoutPage = () => {
  const { getCar, currentCar, loading } = useContext(CarContext);
  const { id } = useParams();

  useEffect(() => {
    getCar(id);
    // eslint-disable-next-line
  }, [id]);

  return (
    <section className="checkout">
      {loading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <LoadingSpinner />
        </div>
      ) : (
        <div className="container container--small">
          <h1 className="checkout__title">Kasse</h1>
          <div className="checkout__content">
            <aside className="checkout__information">
              <DeliverInformationCard partner={currentCar.partner} />
              <OverviewCard displayBtn={false} />
            </aside>
            <div className="checkout__form">
              <CheckoutForm />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CarCheckoutPage;
