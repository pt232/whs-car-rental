import { createContext, useReducer } from "react";
import { ADD_FILTER } from "../types";
import { filterReducer } from "./filterReducer";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const initialState = {
    filter: [],
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

  const removeFilter = (filterToRemove) => {};

  return (
    <FilterContext.Provider
      value={{ filter: state.filter, addFilter, removeFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};
