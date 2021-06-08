import React, { useContext } from "react";
import { FilterContext } from "../../../context/filter/FilterState";
import Card from "../../card/Card";
import FilterForm from "../../form/filter/FilterForm";
import FilterList from "./FilterList";

const FilterCardList = () => {
  const { filterCards } = useContext(FilterContext);

  return (
    <>
      <Card title="Buchungsinformationen" filterCard={true}>
        <FilterForm columnOrientation={true} />
      </Card>
      {filterCards.map((card, index) => {
        return (
          <Card
            key={index}
            title={card.title}
            filterCard={true}
            collapsible={true}
          >
            <FilterList card={card} />
          </Card>
        );
      })}
    </>
  );
};

export default FilterCardList;
