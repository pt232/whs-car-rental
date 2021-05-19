import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./FilterForm.css";

const FilterForm = ({ columnOrientation }) => {
  return (
    <form
      className={`filter-form ${
        columnOrientation ? "filter-form--column" : ""
      }`}
    >
      <fieldset
        className={`filter-form__container ${
          columnOrientation ? "filter-form__container--column" : ""
        }`}
      >
        <FontAwesomeIcon className="filter-form__icon" icon={faMapMarkerAlt} />
        <input
          className={`filter-form__input ${
            columnOrientation ? "filter-form__input--column" : ""
          }`}
          type="text"
          placeholder="Abholstation wählen"
        />
      </fieldset>
      {columnOrientation ? null : <div className="filter-form__separator" />}
      <fieldset
        className={`filter-form__container ${
          columnOrientation ? "filter-form__container--column" : ""
        }`}
      >
        <FontAwesomeIcon className="filter-form__icon" icon={faCalendarAlt} />
        <input
          className={`filter-form__input ${
            columnOrientation ? "filter-form__input--column" : ""
          }`}
          type="text"
          placeholder="Abholdatum"
        />
      </fieldset>
      {columnOrientation ? null : <div className="filter-form__separator" />}
      <fieldset
        className={`filter-form__container ${
          columnOrientation ? "filter-form__container--column" : ""
        }`}
      >
        <FontAwesomeIcon className="filter-form__icon" icon={faCalendarAlt} />
        <input
          className={`filter-form__input ${
            columnOrientation ? "filter-form__input--column" : ""
          }`}
          type="text"
          placeholder="Rückgabedatum"
        />
      </fieldset>
      <button
        className={`filter-form__btn btn btn--filled ${
          columnOrientation ? "filter-form__btn--column" : ""
        }`}
        type="submit"
      >
        {columnOrientation ? (
          <FontAwesomeIcon icon={faSearch} />
        ) : (
          "Mietwagen finden"
        )}
      </button>
    </form>
  );
};

export default FilterForm;
