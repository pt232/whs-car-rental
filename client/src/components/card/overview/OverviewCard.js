import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import PriceTable from "../../table/price/PriceTable";
import carImage from "../../../images/car.png";
import "./OverviewCard.css";
import TotalPriceItem from "./item/TotalPriceItem";

const OverviewCard = () => {
  return (
    <Card>
      <div className="overview-card">
        <div>
          <h3 className="overview-card__title">Kompaktklasse</h3>
          <h5 className="overview-card__subtitle">Volkswagen Golf 7</h5>
        </div>
        <img src={carImage} alt="Volkswagen Golf 7" />
        <PriceTable />
        <TotalPriceItem />
        <Link
          to="/listing/checkout"
          className="overview-card__btn btn btn--filled"
        >
          Weiter
        </Link>
      </div>
    </Card>
  );
};

export default OverviewCard;
