import React from "react";
import "./FilterItem.css";

const FilterItem = ({ filter }) => {
  return (
    <div className="filter-option">
      <input type="checkbox" id={filter} className="checkbox" />
      <label htmlFor={filter} className="filter-option__label">
        {filter}
      </label>
    </div>
  );
};

export default FilterItem;
