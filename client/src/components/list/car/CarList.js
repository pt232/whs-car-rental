import React, { useContext, useEffect } from "react";
import { CarContext } from "../../../context/car/CarState";
import CarCard from "../../card/car/CarCard";
import { LoadingSpinner } from "../../spinner/LoadingSpinner";

const CarList = () => {
  const { cars, loading, getCars } = useContext(CarContext);

  useEffect(() => {
    getCars();
    // eslint-disable-next-line
  }, []);

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
