import React, { useState } from "react";
import Card from "../Card";
import PriceCard from "../price/PriceCard";
import CarInformationList from "../../list/car/CarInformationList";
import CarPartnerItem from "./item/CarPartnerItem";
import { blobToImageSrc } from "../../../utils/helpers";
import "./CarCard.css";
import CarInformationGrid from "../../grid/CarInformationGrid";

const CarCard = ({ car, carType, partner, rentalStation }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card marginTop={35} collapsible={false}>
      <div className="car-card">
        <img
          src={blobToImageSrc(car.image.data)}
          alt={car.carBrand.name + " " + car.name}
          className="car-card__image"
        />
        <div className="car-card__information">
          <div>
            <h3 className="car-card__title">{carType.carClass.name}</h3>
            <h5 className="car-card__subtitle">
              {car.carBrand.name + " " + car.name}
            </h5>
          </div>
          <CarInformationList carType={carType} />
          <CarPartnerItem partner={partner} />
        </div>
        <div className="car-card__price">
          <PriceCard id={car.id} price={car.price} />
          <span
            className={`car-card__more ${
              showMore ? "car-card__more--open" : ""
            }`}
            onClick={() => {
              setShowMore((prevValue) => !prevValue);
            }}
          >
            Mehr Informationen
          </span>
        </div>
        {showMore ? (
          <CarInformationGrid carType={carType} rentalStation={rentalStation} />
        ) : null}
      </div>
    </Card>
  );
};

export default CarCard;
