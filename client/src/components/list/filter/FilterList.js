import React from "react";
import FilterItem from "./item/FilterItem";

const FilterList = () => {
  const filterList = ["SUV", "Luxus", "Sportwagen", "7+ Personen"];

  return (
    <div className="filter-list">
      {filterList.map((filter, index) => {
        return <FilterItem key={index} filter={filter} />;
      })}
    </div>
  );
};

export default FilterList;
