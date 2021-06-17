import React, { useContext, useEffect } from "react";
import { CarContext } from "../../../context/car/CarState";
import { FilterContext } from "../../../context/filter/FilterState";
import CarCard from "../../card/car/CarCard";
import { LoadingSpinner } from "../../spinner/LoadingSpinner";

const CarList = () => {
  const { filteredCars, loading, getCars, filterCars } = useContext(CarContext);
  const { activeFilter, locationFilter, timeFilter } =
    useContext(FilterContext);

  useEffect(() => {
    getCars(activeFilter, locationFilter, timeFilter);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    filterCars(activeFilter, locationFilter, timeFilter);
    // eslint-disable-next-line
  }, [activeFilter, locationFilter, timeFilter]);

  return (
    <>
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
