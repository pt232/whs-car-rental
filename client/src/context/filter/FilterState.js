import { createContext, useReducer } from "react";
import { ADD_FILTER, REMOVE_FILTER } from "../types";
import { filterReducer } from "./filterReducer";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const initialState = {
    filterCards: [
      {
        title: "Fahrzeugklassen",
        checkboxes: [
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
        checkboxes: ["2", "4"],
      },
      {
        title: "Sitze",
        checkboxes: ["2-3", "4-5", "6-7", "8-9"],
      },
      {
        title: "Ausstattung",
        checkboxes: ["Navigation", "Klimaanlage", "Automatik", "Winterreifen"],
      },
      {
        title: "Versicherung & Schutz",
        checkboxes: ["Haftpflichtversicherung", "Glas- & Reifenschutz"],
      },
      {
        title: "Freikilometer",
        checkboxes: ["750km", "1500km"],
      },
    ],
    activeFilter: [],
    error: null,
  };

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const addActiveFilter = (newFilter) => {
    dispatch({
      type: ADD_FILTER,
      payload: newFilter,
    });
  };

  const removeActiveFilter = (filterToRemove) => {
    dispatch({
      type: REMOVE_FILTER,
      payload: filterToRemove,
    });
  };

  return (
    <FilterContext.Provider
      value={{
        filterCards: state.filterCards,
        activeFilter: state.activeFilter,
        addActiveFilter,
        removeActiveFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
