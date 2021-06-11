import {
  ADD_FILTER,
  ADD_STATION_FILTER,
  REMOVE_FILTER,
  REMOVE_STATION_FILTER,
} from "../types";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        activeFilter: [...state.activeFilter, action.payload],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        activeFilter: state.activeFilter.filter(
          (item) => item !== action.payload
        ),
      };
    case ADD_STATION_FILTER:
      return {
        ...state,
        stationFilter: [...state.stationFilter, action.payload],
      };
    case REMOVE_STATION_FILTER:
      return {
        ...state,
        stationFilter: [],
      };
    default:
      return state;
  }
};
