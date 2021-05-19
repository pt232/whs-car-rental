import React from "react";
import Card from "../Card";
import carImage from "../../../images/car.png";
import PriceCard from "../price/PriceCard";
import CarInformationList from "../../list/car/CarInformationList";
import CarPartnerItem from "./item/CarPartnerItem";
import "./CarCard.css";

const CarCard = () => {
  return (
    <Card marginTop={35}>
      <div className="car-card">
        <img
          src={carImage}
          alt="Volkswagen Golf 7"
          className="car-card__image"
        />
        <div className="car-card__information">
          <div>
            <h3 className="car-card__title">Kompaktklasse</h3>
            <h5 className="car-card__subtitle">Volkswagen Golf 7</h5>
          </div>
          <CarInformationList />
          <CarPartnerItem />
        </div>
        <PriceCard />
      </div>
    </Card>
  );
};

export default CarCard;
