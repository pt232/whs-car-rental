import { CAR_ERROR, GET_CARS, SET_LOADING } from "../types";

export const carReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CARS:
      return {
        ...state,
        cars: action.payload,
        loading: false,
      };
    case CAR_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default: {
      return state;
    }
  }
};
