import { createContext, useReducer } from "react";
import {
  GET_RESERVATIONS,
  RESERVATION_ERROR,
  RESERVATION_UPDATE,
  SET_LOADING,
} from "../types";
import { reservationReducer } from "./reservationReducer";
import { get, patch } from "../../utils/rest";

export const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const initialState = {
    reservations: [],
    updateTrigger: false,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(reservationReducer, initialState);

  const getReservations = async (token, role) => {
    dispatch({ type: SET_LOADING });

    try {
      let res;

      if (role === "customer") res = await get(`/api/v1/reservation/${token}`);
      else res = await get(`/api/v1/reservation/partner/${token}`);

      dispatch({
        type: GET_RESERVATIONS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: RESERVATION_ERROR,
        payload: error,
      });
    }
  };

  const updateReservationStatus = async (id, newStatus, carId) => {
    dispatch({ type: SET_LOADING });

    try {
      await patch(`/api/v1/reservation/${id}`, { newStatus, carId });

      dispatch({
        type: RESERVATION_UPDATE,
      });
    } catch (error) {
      dispatch({
        type: RESERVATION_ERROR,
        payload: error,
      });
    }
  };

  return (
    <ReservationContext.Provider
      value={{
        reservations: state.reservations,
        updateTrigger: state.updateTrigger,
        loading: state.loading,
        error: state.error,
        getReservations,
        updateReservationStatus,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
