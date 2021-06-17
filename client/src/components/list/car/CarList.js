import React, { useContext, useEffect } from "react";
import { CarContext } from "../../../context/car/CarState";
import { FilterContext } from "../../../context/filter/FilterState";
import { MessageContext } from "../../../context/message/MessageState";
import CarCard from "../../card/car/CarCard";
import MessageList from "../../list/message/MessageList";
import { LoadingSpinner } from "../../spinner/LoadingSpinner";

const CarList = () => {
  const { filteredCars, loading, getCars, filterCars } = useContext(CarContext);
  const { activeFilter, locationFilter, timeFilter } =
    useContext(FilterContext);
  const { errors, removeErrorMessage } = useContext(MessageContext);

  useEffect(() => {
    getCars(activeFilter, locationFilter, timeFilter);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    removeErrorMessage();
    filterCars(activeFilter, locationFilter, timeFilter);
    // eslint-disable-next-line
  }, [activeFilter, locationFilter, timeFilter]);

  return (
    <>
      {errors.length > 0 ? (
        <div style={{ marginTop: "3.5rem" }}>
          <MessageList items={errors} type="error" />
        </div>
      ) : null}
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "6rem 0",
          }}
        >
          <LoadingSpinner />
        </div>
      ) : filteredCars.length !== 0 ? (
        filteredCars.map((car) => {
          return (
            <CarCard
              key={car.id}
              car={car}
              carType={car.carType}
              partner={car.partner}
            />
          );
        })
      ) : (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "6rem 0",
            fontSize: "1.4rem",
          }}
        >
          Es konnte leider kein Mietwagen mit den angegebenen Filtern gefunden
          werden.
        </p>
      )}
    </>
  );
};

export default CarList;
