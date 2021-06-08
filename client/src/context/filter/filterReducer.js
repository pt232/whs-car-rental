import { ADD_FILTER, REMOVE_FILTER } from "../types";

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
    default:
      return state;
  }
};
