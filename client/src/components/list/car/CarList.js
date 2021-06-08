import React, { useContext, useEffect } from "react";
import { CarContext } from "../../../context/car/CarState";
import { FilterContext } from "../../../context/filter/FilterState";
import CarCard from "../../card/car/CarCard";
import { LoadingSpinner } from "../../spinner/LoadingSpinner";

const CarList = () => {
  const { cars, loading, getCars } = useContext(CarContext);
  const { activeFilter } = useContext(FilterContext);

  useEffect(() => {
    getCars(activeFilter);
    // eslint-disable-next-line
  }, [activeFilter]);

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
      ) : (
        cars.map((car) => {
          return (
            <CarCard
              key={car.id}
              car={car}
              carType={car.carType}
              partner={car.partner}
            />
          );
        })
      )}
    </>
  );
};

export default CarList;
