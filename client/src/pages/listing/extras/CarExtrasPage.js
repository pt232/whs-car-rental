import React from "react";
import OverviewCard from "../../../components/card/overview/OverviewCard";
import SpecsList from "../../../components/list/specs/SpecsList";
import "./CarExtrasPage.css";

const CarExtrasPage = () => {
  return (
    <section className="extras">
      <div className="container container--small">
        <h1 className="extras__title">Fahrzeug-Extras auswählen</h1>
        <div className="extras__content">
          <div className="extras__specs">
            <SpecsList />
          </div>
          <div className="extras__overview">
            <OverviewCard displayBtn={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarExtrasPage;
