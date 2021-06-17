import { ADD_ERROR_MESSAGE, REMOVE_ERROR_MESSAGE } from "../types";

export const messageReducer = (state, action) => {
  switch (action.type) {
    case ADD_ERROR_MESSAGE:
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };
    case REMOVE_ERROR_MESSAGE:
      return {
        ...state,
        errors: [],
      };
    default:
      return state;
  }
};
