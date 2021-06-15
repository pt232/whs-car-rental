import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { get } from "../../../utils/rest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./FilterForm.css";

const FilterForm = ({ columnOrientation }) => {
  const [rentalStation, setRentalStation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [stationList, setStationList] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const getStations = async () => {
      if (rentalStation.trim().length >= 2) {
        try {
          const res = await get(`/api/v1/station?value=${rentalStation}`);

          const stationAlreadyPicked = res.data.find(
            (station) => station.city === rentalStation.trim()
          );

          if (!stationAlreadyPicked) setStationList(res.data);
        } catch (error) {
          throw new Error(error);
        }
      } else {
        setStationList([]);
      }
    };
    getStations();
  }, [rentalStation]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      history.push("/listing");
    }
  };

  const handleChange = (e) => {
    setRentalStation(e.target.value);
  };

  const handleClick = (city) => {
    setRentalStation(city);
    setStationList([]);
  };

  return (
    <form
      className={`filter-form ${
        columnOrientation ? "filter-form--column" : ""
      }`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <fieldset
        className={`filter-form__container ${
          columnOrientation ? "filter-form__container--column" : ""
        }`}
      >
        <FontAwesomeIcon className="filter-form__icon" icon={faMapMarkerAlt} />
        <div className="filter-form__wrapper">
          <input
            className={`filter-form__input ${
              columnOrientation ? "filter-form__input--column" : ""
            }`}
            type="text"
            placeholder="Abholstation wählen"
            required
            value={rentalStation}
            onChange={(e) => handleChange(e)}
          />
          {stationList.length > 0 ? (
            <ul className="filter-form__suggestions">
              {stationList.map((station) => (
                <li key={station.id} onClick={() => handleClick(station.city)}>
                  {station.city}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </fieldset>
      {columnOrientation ? null : <div className="filter-form__separator" />}
      <fieldset
        className={`filter-form__container ${
          columnOrientation ? "filter-form__container--column" : ""
        }`}
      >
        <input
          className={`filter-form__input ${
            columnOrientation ? "filter-form__input--column" : ""
          }`}
          type="datetime-local"
          placeholder="Abholdatum"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </fieldset>
      {columnOrientation ? null : <div className="filter-form__separator" />}
      <fieldset
        className={`filter-form__container ${
          columnOrientation ? "filter-form__container--column" : ""
        }`}
      >
        <input
          className={`filter-form__input ${
            columnOrientation ? "filter-form__input--column" : ""
          }`}
          type="datetime-local"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="Rückgabedatum"
          required
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
