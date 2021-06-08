import React, { useContext } from "react";
import { FilterContext } from "../../../../context/filter/FilterState";
import "./FilterItem.css";

const FilterItem = ({ tableName, columnName, value }) => {
  const { addFilter, removeFilter } = useContext(FilterContext);

  const handleChange = (e) => {
    if (e.target.checked) {
      addFilter({
        tableName,
        columnName,
        value,
      });
    } else {
      removeFilter(value);
    }
  };

  return (
    <div className="filter-option">
      <input
        type="checkbox"
        id={value}
        className="checkbox"
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
