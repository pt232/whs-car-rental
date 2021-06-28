import {
  GET_BACK_RESERVATIONS,
  GET_RESERVATIONS,
  RESERVATION_ERROR,
  RESERVATION_UPDATE,
  SET_LOADING,
} from "../types";

export const reservationReducer = (state, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload,
        loading: false,
      };
    case GET_BACK_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload,
        loading: false,
      };
    case RESERVATION_UPDATE:
      return {
        ...state,
        updateTrigger: !state.updateTrigger,
        loading: false,
      };
    case RESERVATION_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
