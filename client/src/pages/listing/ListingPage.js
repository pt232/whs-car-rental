import React from "react";
import SortingSelect from "../../components/select/SortingSelect";
import CarList from "../../components/list/car/CarList";
import "./ListingPage.css";
import FilterCardList from "../../components/list/filter/FilterCardList";

const ListingPage = () => {
  return (
    <section className="listing">
      <div className="listing__wrapper container container--small">
        <aside className="listing__filter">
          <FilterCardList />
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
