import { createContext, useReducer } from "react";
import { ADD_FILTER, REMOVE_FILTER } from "../types";
import { filterReducer } from "./filterReducer";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const initialState = {
    filter: [],
    filterCards: [
      {
        title: "Fahrzeugklassen",
        tableName: "carClass",
        columnName: "name",
        list: [
          "Kleinwagen",
          "Kompaktklasse",
          "Mittelklasse",
          "Oberklasse",
          "Van",
          "SUV",
          "Sportwagen",
        ],
      },
      {
        title: "Türen",
        tableName: "carType",
        columnName: "doors",
        list: ["2", "4"],
      },
      {
        title: "Sitze",
        tableName: "carType",
        columnName: "seats",
        list: ["2-3", "4-5", "6-7", "8-9"],
      },
      {
        title: "Ausstattung",
        tableName: "carType",
        columnName: [
          "navigation",
          "air_conditioner",
          "automatic",
          "winter_tires",
        ],
        list: ["Navigation", "Klimaanlage", "Automatik", "Winterreifen"],
      },
      {
        title: "Versicherung & Schutz",
        tableName: "carType",
        columnName: ["insurance", "protection"],
        list: ["Haftpflichtversicherung", "Glas- & Reifenschutz"],
      },
      {
        title: "Freikilometer",
        tableName: "carType",
        columnName: "free_kilometers",
        list: ["750km", "1500km"],
      },
    ],
    error: null,
  };

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const addFilter = (newFilter) => {
    dispatch({
      type: ADD_FILTER,
      payload: newFilter,
    });
    console.log(state.filter);
  };

  const removeFilter = (filterToRemove) => {
    dispatch({
      type: REMOVE_FILTER,
      payload: filterToRemove,
    });
  };

  return (
    <FilterContext.Provider
      value={{
        filter: state.filter,
        filterCards: state.filterCards,
        addFilter,
        removeFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
