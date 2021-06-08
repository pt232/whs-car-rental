import React, { useContext, useState } from "react";
import { FilterContext } from "../../../../context/filter/FilterState";
import "./FilterItem.css";

const FilterItem = ({ value }) => {
  const { activeFilter, addActiveFilter, removeActiveFilter } =
    useContext(FilterContext);
  const [checked, setChecked] = useState(activeFilter.includes(value));

  const handleChange = (e) => {
    setChecked((prevValue) => !prevValue);
    if (e.target.checked) {
      addActiveFilter(value);
    } else {
      removeActiveFilter(value);
    }
  };

  return (
    <div className="filter-option">
      <input
        type="checkbox"
        id={value}
        className="checkbox"
        checked={checked}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <label htmlFor={value} className="filter-option__label">
        {value}
      </label>
    </div>
  );
};

export default FilterItem;
