import React, { useContext } from "react";
import { FilterContext } from "../../../../context/filter/FilterState";
import "./FilterItem.css";

const FilterItem = ({ filter }) => {
  const { addFilter, removeFilter } = useContext(FilterContext);

  const handleChange = (e) => {
    if (e.target.checked) {
      addFilter(filter);
    } else {
      removeFilter(filter);
    }
  };

  return (
    <div className="filter-option">
      <input
        type="checkbox"
        id={filter}
        className="checkbox"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <label htmlFor={filter} className="filter-option__label">
        {filter}
      </label>
    </div>
  );
};

export default FilterItem;
