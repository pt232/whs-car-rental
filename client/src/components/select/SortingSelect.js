import React from "react";
import "./SortingSelect.css";

const SortingSelect = () => {
  return (
    <div className="sorting-select-wrapper">
      <select defaultValue="Standardsortierung" className="sorting-select">
        <option value="Standardsortierung">Standardsortierung</option>
        <option value="Preis abwärts">Preis abwärts</option>
        <option value="Preis aufwärts">Preis aufwärts</option>
      </select>
    </div>
  );
};

export default SortingSelect;
