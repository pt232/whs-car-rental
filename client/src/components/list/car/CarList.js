import React, { useContext, useEffect } from "react";
import { CarContext } from "../../../context/car/CarState";
import CarCard from "../../card/car/CarCard";

const CarList = () => {
  const { cars, getCars } = useContext(CarContext);

  useEffect(() => {
    getCars();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {cars.map((car) => {
        return (
          <CarCard
            key={car.id}
            car={car}
            carType={car.carType}
            partner={car.partner}
            station={car.rentalStation}
          />
        );
      })}
    </>
  );
};

export default CarList;
