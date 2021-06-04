import { CAR_ERROR, GET_CARS } from "../types";

export const carReducer = (state, action) => {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        cars: action.payload,
      };
    case CAR_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
