import React from "react";
import Card from "../Card";
import PriceCard from "../price/PriceCard";
import CarInformationList from "../../list/car/CarInformationList";
import CarPartnerItem from "./item/CarPartnerItem";
import { blobToImageSrc } from "../../../utils/helpers";
import "./CarCard.css";

const CarCard = ({ car, carType, partner }) => {
  return (
    <Card marginTop={35}>
      <div className="car-card">
        <img
          src={blobToImageSrc(car.image.data)}
          alt="Volkswagen Golf 7"
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
        <PriceCard price={car.price} />
      </div>
    </Card>
  );
};

export default CarCard;
