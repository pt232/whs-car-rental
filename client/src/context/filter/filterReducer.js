import { ADD_FILTER, REMOVE_FILTER } from "../types";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        filter: [...state.filter, action.payload],
      };
    case REMOVE_FILTER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
