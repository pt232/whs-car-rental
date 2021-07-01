import React, { useContext, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { CarContext } from "../../../context/car/CarState";
import { FilterContext } from "../../../context/filter/FilterState";
import { ReservationContext } from "../../../context/reservation/ReservationState";
import { UserContext } from "../../../context/user/UserState";
import DeliverInformationCard from "../../../components/card/deliver/DeliverInformationCard";
import OverviewCard from "../../../components/card/overview/OverviewCard";
import LoginForm from "../../../components/form/login/LoginForm";
import "./CarCheckoutPage.css";
import { LoadingSpinner } from "../../../components/spinner/LoadingSpinner";
import BookingCard from "../../../components/card/booking/BookingCard";
import { get } from "../../../utils/rest";

const CarCheckoutPage = () => {
  const { getCar, currentCar, loading } = useContext(CarContext);
  const { locationFilter, timeFilter } = useContext(FilterContext);
  const { driversFee } = useContext(ReservationContext);
  const { token } = useContext(UserContext);

  const [render, setRender] = useState("");
  const [info, setInfo] = useState("");
  const [priceInformation, setPriceInformation] = useState();
  const { id } = useParams();

  useEffect(() => {
    getCar(id);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    let isMounted = true;

    const fetchPrice = async () => {
      const res = await get(
        `/api/v1/car/price/${id}/${token}?fee=${driversFee}`
      );

      if (isMounted) {
        console.log(res);

        if (res.discount) {
          setInfo([
            "Sie haben bereits über unsere Autovermietung 10.000 km zurückgelegt. Dafür gibt es von uns einen Rabatt von 10%! 🎉",
          ]);
        } else {
          setInfo([]);
        }
        setPriceInformation(res);
      }
    };

    fetchPrice();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, driversFee]);

  const handler = () => {
    setRender("Render");
  };

  return (
    <>
      {(!timeFilter.startDate && !timeFilter.endDate) || !locationFilter ? (
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
                {currentCar ? (
                  <>
                    <DeliverInformationCard
                      partner={currentCar.partner}
                      station={currentCar.rentalStation}
                    />
                    {priceInformation ? (
                      <OverviewCard
                        car={currentCar}
                        priceInformation={priceInformation}
                      />
                    ) : null}
                  </>
                ) : null}
              </aside>
              <div className="checkout__form">
                {!token ? (
                  <LoginForm
                    title="Zum Fortfahren einloggen"
                    render={render}
                    handler={handler}
                  />
                ) : currentCar.partner && priceInformation ? (
                  <BookingCard
                    carId={currentCar.id}
                    partnerId={currentCar.partner.id}
                    twoDrivers={currentCar.carType.twoDrivers}
                    info={info}
                    removeInfoText={() => setInfo([])}
                  />
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
