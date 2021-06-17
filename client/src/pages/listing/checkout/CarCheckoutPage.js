import React, { useContext, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { CarContext } from "../../../context/car/CarState";
import { FilterContext } from "../../../context/filter/FilterState";
import DeliverInformationCard from "../../../components/card/deliver/DeliverInformationCard";
import OverviewCard from "../../../components/card/overview/OverviewCard";
import LoginForm from "../../../components/form/login/LoginForm";
import "./CarCheckoutPage.css";
import { LoadingSpinner } from "../../../components/spinner/LoadingSpinner";

const CarCheckoutPage = () => {
  const { getCar, currentCar, loading } = useContext(CarContext);
  const { timeFilter } = useContext(FilterContext);
  const { id } = useParams();

  useEffect(() => {
    getCar(id);
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      {!timeFilter.startDate && !timeFilter.endDate ? (
        <Redirect to="/listing" />
      ) : null}
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
                {!localStorage.getItem("token") ? (
                  <LoginForm title="Zum Fortfahren einloggen" />
                ) : null}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CarCheckoutPage;
