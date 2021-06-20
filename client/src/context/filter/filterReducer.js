import {
  ADD_FILTER,
  ADD_LOCATION_FILTER,
  ADD_TIME_FILTER,
  REMOVE_FILTER,
  REMOVE_LOCATION_FILTER,
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
    case ADD_LOCATION_FILTER:
      return {
        ...state,
        locationFilter: action.payload,
      };
    case REMOVE_LOCATION_FILTER:
      return {
        ...state,
        locationFilter: "",
        timeFilter: { startDate: "", endDate: "" },
      };
    case ADD_TIME_FILTER:
      return {
        ...state,
        timeFilter: {
          startDate: action.payload.startDate,
          endDate: action.payload.endDate,
        },
      };
    default:
      return state;
  }
};
