import React from "react";
import SortingSelect from "../../components/select/SortingSelect";
import Card from "../../components/card/Card";
import FilterForm from "../../components/form/filter/FilterForm";
import FilterList from "../../components/list/filter/FilterList";
import CarList from "../../components/list/car/CarList";
import "./ListingPage.css";

const ListingPage = () => {
  return (
    <section className="listing">
      <div className="listing__wrapper container container--small">
        <aside className="listing__filter">
          <Card title="Buchungsinformationen" filterCard={true}>
            <FilterForm columnOrientation={true} />
          </Card>
          <Card title="Fahrzeugklasse" filterCard={true}>
            <FilterList />
          </Card>
          <Card title="Fahrzeugklasse" filterCard={true}>
            <FilterList />
          </Card>
          <Card title="Fahrzeugklasse" filterCard={true}>
            <FilterList />
          </Card>
        </aside>
        <div className="listing__content">
          <div className="listing__heading">
            <h1 className="listing__title">Mietwagen finden</h1>
            <SortingSelect />
          </div>
          <CarList />
        </div>
      </div>
    </section>
  );
};

export default ListingPage;
