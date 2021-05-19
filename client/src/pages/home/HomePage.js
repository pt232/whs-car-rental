import React from "react";
import FilterForm from "../../components/form/filter/FilterForm";
import "./HomePage.css";

const HomePage = () => {
  return (
    <section className="hero container container--large">
      <div className="hero__wrapper container container--small">
        <div className="hero__headings">
          <h1 className="hero__heading">
            Finde jetzt deinen <span>Mietwagen</span>
          </h1>
          <h3 className="hero__sub-heading">
            Reserviere jetzt schnell und einfach ein Auto
          </h3>
        </div>
        <FilterForm columnOrientation={false} />
      </div>
    </section>
  );
};

export default HomePage;
