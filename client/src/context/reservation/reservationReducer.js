import {
  GET_BACK_RESERVATIONS,
  GET_RESERVATIONS,
  RESERVATION_ERROR,
  RESERVATION_UPDATE,
  SET_DRIVERS_FEE,
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
    case SET_DRIVERS_FEE:
      return {
        ...state,
        driversFee: action.payload,
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
