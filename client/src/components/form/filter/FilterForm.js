import React, { useState, useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { FilterContext } from "../../../context/filter/FilterState";
import { get } from "../../../utils/rest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./FilterForm.css";
import { minDate } from "../../../utils/helpers";
import MessageList from "../../list/message/MessageList";

const FilterForm = ({ columnOrientation }) => {
  const { locationFilter, timeFilter, addLocationFilter, addTimeFilter } =
    useContext(FilterContext);
  const [rentalStation, setRentalStation] = useState(locationFilter ?? "");
  const [startDate, setStartDate] = useState(timeFilter.startDate ?? "");
  const [endDate, setEndDate] = useState(timeFilter.endDate ?? "");
  const [stationList, setStationList] = useState([]);
  const [errors, setErrors] = useState([]);
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

    setErrors([]);

    if (Date.parse(startDate) > Date.parse(endDate)) {
      setErrors((prevValue) => [
        ...prevValue,
        "Das Abgabedatum kommt vor dem Abholdatum",
      ]);
      return;
    }

    if (Date.parse(endDate) < Date.parse(startDate) + 24 * 60 * 60 * 1000) {
      setErrors((prevValue) => [
        ...prevValue,
        "Die Mindestmietdauer beträgt 24 Stunden",
      ]);
      return;
    }

    addTimeFilter(startDate, endDate);
    addLocationFilter(rentalStation);

    if (location.pathname === "/") {
      history.push("/listing");
    }
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
      <div style={{ maxWidth: "35rem" }}>
        {errors.length > 0 ? (
          <MessageList
            items={errors}
            type="error"
            margin={columnOrientation ? "" : "1rem"}
          />
        ) : null}
      </div>
      <div
        className={`filter-form__wrapper ${
          columnOrientation ? "filter-form__wrapper--column" : ""
        }`}
      >
        <fieldset
          className={`filter-form__container ${
            columnOrientation ? "filter-form__container--column" : ""
          }`}
        >
          <FontAwesomeIcon
            className="filter-form__icon"
            icon={faMapMarkerAlt}
          />
          <div className="filter-form__wrapper">
            <input
              className={`filter-form__input ${
                columnOrientation ? "filter-form__input--column" : ""
              }`}
              type="text"
              placeholder="Abholstation wählen"
              value={rentalStation}
              onChange={(e) => setRentalStation(e.target.value)}
            />
            {stationList.length > 0 ? (
              <ul className="filter-form__suggestions">
                {stationList.map((station) => (
                  <li
                    key={station.id}
                    onClick={() => handleClick(station.city)}
                  >
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
            min={minDate()}
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
            min={minDate()}
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
      </div>
    </form>
  );
};

export default FilterForm;
