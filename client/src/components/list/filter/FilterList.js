import React from "react";
import FilterItem from "./item/FilterItem";

const FilterList = ({ checkboxes }) => {
  return (
    <div className="filter-list">
      {checkboxes.map((cb, index) => {
        return <FilterItem key={index} value={cb} />;
      })}
    </div>
  );
};

export default FilterList;
