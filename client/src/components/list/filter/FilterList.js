import React from "react";
import FilterItem from "./item/FilterItem";

const FilterList = ({ card }) => {
  const { tableName, columnName, list } = card;

  return (
    <div className="filter-list">
      {list.map((filter, index) => {
        return (
          <FilterItem
            key={index}
            tableName={tableName}
            columnName={
              Array.isArray(columnName) ? columnName[index] : columnName
            }
            value={filter}
          />
        );
      })}
    </div>
  );
};

export default FilterList;
